export interface FAQItem {
  question: string;
  answer: string;
}

export type ScheduleEvent = {
  date: string;
  mission: string;
  location: string;
  start: string;
  end: string;
  notes?: string;
};
