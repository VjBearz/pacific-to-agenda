import React, { useState, useCallback, useRef } from 'react';
import type { ScheduleEvent } from '../types';
import { generateICS } from '../ics';

// Helper to convert a file to a base64 string
const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve((reader.result as string).split(',')[1]);
        reader.onerror = (error) => reject(error);
    });
};

const Demo: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [schedule, setSchedule] = useState<ScheduleEvent[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files;
        if (selectedFiles) {
            if (selectedFiles.length > 5) {
                setError('Vous ne pouvez importer que 5 photos à la fois.');
                return;
            }
            setFiles(Array.from(selectedFiles));
            setError('');
        }
    };

    const triggerFileSelect = () => {
        fileInputRef.current?.click();
    };
    
    const handleAnalyzeClick = async () => {
        if (files.length === 0) {
            setError('Veuillez sélectionner au moins une image.');
            return;
        }

        setIsLoading(true);
        setError('');
        setSchedule([]);

        try {
            let allEvents: ScheduleEvent[] = [];
            // We analyze each file one by one
            for (const file of files) {
                const imageBase64 = await fileToBase64(file);
                
                // This now calls our secure intermediary API endpoint
                const response = await fetch('/api/analyze', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        imageBase64,
                        mimeType: file.type,
                    }),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || `L'analyse a échoué pour l'image ${file.name}`);
                }
                
                const data: any[] = await response.json();

                const parsedEvents = data.map(item => ({
                    ...item,
                    isRepo: item.mission?.toLowerCase().includes('rp') || item.mission?.toLowerCase().includes('ca'),
                }));
                allEvents = [...allEvents, ...parsedEvents];
            }
            
            setSchedule(allEvents);

        } catch (err: any) {
            console.error(err);
            setError(err.message || 'Une erreur est survenue lors de l\'analyse.');
        } finally {
            setIsLoading(false);
        }
    };


    const handleDownloadICS = () => {
        const icsString = generateICS(schedule);
        const blob = new Blob([icsString], { type: 'text/calendar' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'planning.ics';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleReset = () => {
        setFiles([]);
        setSchedule([]);
        setError('');
        setIsLoading(false);
        if(fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <section id="demo" className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-custom-gradient">Essayer la démo</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                       Voyez la magie opérer.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
                        Envoyez les captures d'écran de votre planning Pacific. L'IA va extraire, combiner et formater vos données en un instant.
                    </p>
                </div>

                {schedule.length === 0 && (
                    <div className="mt-16 max-w-3xl mx-auto">
                        <div
                            onDragOver={(e) => e.preventDefault()}
                            className="relative block w-full rounded-lg border-2 border-dashed border-[var(--border-color)] p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-ico)]"
                        >
                            <input
                                ref={fileInputRef}
                                type="file"
                                multiple
                                accept="image/png, image/jpeg, image/webp"
                                onChange={handleFileChange}
                                className="sr-only"
                            />
                            <svg className="mx-auto h-12 w-12 text-[var(--text-secondary)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l-3.75 3.75M12 9.75l3.75 3.75M3 17.25V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 17.25z" />
                            </svg>

                            <span className="mt-2 block text-sm font-semibold text-[var(--text-primary)]">
                                {files.length > 0 ? `${files.length} image(s) sélectionnée(s)` : 'Glissez une image ou cliquez pour sélectionner'}
                            </span>
                            <button onClick={triggerFileSelect} className="mt-4 text-sm font-semibold leading-6 text-custom-gradient">
                                Parcourir les fichiers
                            </button>
                        </div>
                        {error && <p className="mt-4 text-center text-sm text-red-500">{error}</p>}

                        <div className="mt-8 flex justify-center">
                             <button
                                onClick={handleAnalyzeClick}
                                disabled={isLoading || files.length === 0}
                                className="rounded-md bg-custom-gradient px-8 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-x-2"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Analyse en cours...
                                    </>
                                ) : (
                                    <>
                                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                                        Lancer l'analyse IA
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                )}
                
                {schedule.length > 0 && (
                     <div className="mt-16 flow-root">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div className="overflow-hidden shadow ring-1 ring-[var(--border-color)] sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-[var(--border-color)]">
                                        <thead className="bg-[var(--card-bg)]">
                                            <tr>
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-[var(--text-primary)] sm:pl-6">Date</th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[var(--text-primary)]">Début</th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[var(--text-primary)]">Fin</th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[var(--text-primary)]">Mission</th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-[var(--text-primary)]">Lieu</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-[var(--border-color)] bg-[var(--fond)]">
                                            {schedule.map((event, index) => (
                                                <tr key={index}>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[var(--text-primary)] sm:pl-6">{event.date}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[var(--text-secondary)]">{event.start}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[var(--text-secondary)]">{event.end}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                                                        <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${event.isRepo ? 'bg-red-400/20 text-red-400 ring-1 ring-inset ring-red-400/20' : 'bg-blue-400/20 text-blue-400 ring-1 ring-inset ring-blue-400/20'}`}>
                                                            {event.mission}
                                                        </span>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[var(--text-secondary)]">{event.location}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                         <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button onClick={handleDownloadICS} className="w-full sm:w-auto rounded-md bg-custom-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-x-2">
                               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                Exporter .ICS
                            </button>
                             <a href="https://calendar.google.com/calendar/r/settings/export" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto rounded-md bg-[var(--card-bg)] px-4 py-2.5 text-sm font-semibold text-[var(--text-primary)] shadow-sm ring-1 ring-inset ring-[var(--border-color)] hover:bg-[var(--border-color)] transition-colors flex items-center justify-center gap-x-2">
                                Ajouter à Google Calendar
                            </a>
                             <button onClick={handleReset} className="w-full sm:w-auto text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                                Réinitialiser
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Demo;
