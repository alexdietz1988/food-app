export type Season = 'spring' | 'summer' | 'fall' | 'winter' | 'all';

export interface Food {
  name: string;
  category?: string;
  seasons?: Season[];
}

export const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
