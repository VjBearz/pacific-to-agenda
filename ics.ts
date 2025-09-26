import type { ScheduleEvent } from './types';

const escapeICSValue = (text: string = ''): string => {
    return text.replace(/\\/g, '\\\\').replace(/,/g, '\\,').replace(/;/g, '\\;').replace(/\n/g, '\\n');
}

const getICSTimestamp = (date: Date): string => {
    return date.toISOString().replace(/[-:.]/g, '').substring(0, 15) + 'Z';
};

const formatDate = (dateStr: string): string => {
    // Expected format YYYY-MM-DD from a valid date object
    return dateStr.replace(/-/g, '');
};

const formatTime = (timeStr: string): string => {
    return timeStr.replace(/:/g, '') + '00';
};

// A more robust date parser for French dates like "Lu 25 août"
const parseFrenchDate = (dateString: string): Date | null => {
    // FIX: Removed duplicate keys 'mars', 'mai', 'juin', 'août' which were present for both full and abbreviated month names.
    const months: { [key: string]: number } = {
        'janvier': 0, 'février': 1, 'mars': 2, 'avril': 3, 'mai': 4, 'juin': 5,
        'juillet': 6, 'août': 7, 'septembre': 8, 'octobre': 9, 'novembre': 10, 'décembre': 11,
        'janv.': 0, 'févr.': 1, 'avr.': 3,
        'juil.': 6, 'sept.': 8, 'oct.': 9, 'nov.': 10, 'déc.': 11
    };

    const parts = dateString.toLowerCase().split(' ').filter(Boolean); // "lu", "25", "août"
    if (parts.length < 3) return null;

    const day = parseInt(parts[1], 10);
    const monthName = parts[2].replace('.', '');
    const month = months[monthName];
    const year = new Date().getFullYear(); // Assume current year

    if (!isNaN(day) && month !== undefined) {
        // Use UTC to avoid local timezone shifts during date creation
        return new Date(Date.UTC(year, month, day));
    }
    return null;
}


export const generateICS = (events: ScheduleEvent[], calendarName = 'Planning'): string => {
    const icsParts: string[] = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Pacific to Agenda//App v1.0//EN',
        'CALSCALE:GREGORIAN',
        `X-WR-CALNAME:${escapeICSValue(calendarName)}`,
        'X-WR-TIMEZONE:Europe/Paris',
    ];

    const timestamp = getICSTimestamp(new Date());

    events.forEach((event, index) => {
        const uid = `${timestamp.substring(0,8)}-${index}@pacific-to-agenda.app`;
        const missionUpper = event.mission?.toUpperCase() || '';
        const isAllDay = missionUpper.includes('RP') || missionUpper.includes('CA');

        const parsedDate = parseFrenchDate(event.date);
        if (!parsedDate) {
            console.warn(`Skipping event with invalid date: ${event.date}`);
            return; // Skip event if date is invalid
        }
        // Get YYYY-MM-DD format from the parsed date
        const eventDateISO = parsedDate.toISOString().split('T')[0];

        icsParts.push('BEGIN:VEVENT');
        icsParts.push(`UID:${uid}`);
        icsParts.push(`DTSTAMP:${timestamp}`);

        let summary = '';
        if (missionUpper.includes('RP')) {
            summary = `Repos (${event.mission})`;
        } else if (missionUpper.includes('CA')) {
            summary = `Congé Annuel (${event.mission})`;
        } else {
            summary = event.mission;
        }
        icsParts.push(`SUMMARY:${escapeICSValue(summary)}`);

        if (isAllDay) {
            const nextDay = new Date(parsedDate);
            nextDay.setUTCDate(nextDay.getUTCDate() + 1);
            const nextDayISO = nextDay.toISOString().split('T')[0];

            icsParts.push(`DTSTART;VALUE=DATE:${formatDate(eventDateISO)}`);
            icsParts.push(`DTEND;VALUE=DATE:${formatDate(nextDayISO)}`);
            icsParts.push('TRANSP:TRANSPARENT');
        } else {
            // Handle potential overnight shifts
            const startDateTime = new Date(`${eventDateISO}T${event.start}:00`);
            let endDateTime = new Date(`${eventDateISO}T${event.end}:00`);
            
            // If end time is earlier than start time, it's an overnight shift
            if (endDateTime < startDateTime) {
                endDateTime.setDate(endDateTime.getDate() + 1);
            }
            
            const endDateISO = endDateTime.toISOString().split('T')[0];

            icsParts.push(`DTSTART;TZID=Europe/Paris:${formatDate(eventDateISO)}T${formatTime(event.start)}`);
            icsParts.push(`DTEND;TZID=Europe/Paris:${formatDate(endDateISO)}T${formatTime(event.end)}`);
            
            if (event.location) {
                icsParts.push(`LOCATION:${escapeICSValue(event.location)}`);
            }
        }

        if (event.notes) {
            icsParts.push(`DESCRIPTION:${escapeICSValue(event.notes)}`);
        }
        
        icsParts.push('END:VEVENT');
    });

    icsParts.push('END:VCALENDAR');

    return icsParts.join('\r\n');
};
