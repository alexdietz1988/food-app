export type Season = 'spring' | 'summer' | 'fall' | 'winter' | 'all';
export type Nutrient = 'protein' | 'carbs' | 'veggies' | 'sweets' | 'all';

export const seasons: Season[] = ['all', 'spring', 'summer', 'fall', 'winter'];
export const nutrients: Nutrient[] = [
  'all',
  'protein',
  'carbs',
  'veggies',
  'sweets',
];

export interface Food {
  name: string;
  nutrient?: string;
  category?: string;
  seasons?: Season[];
  image?: string;
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

export type Filter = {
  season: Season;
  nutrient: string;
};
