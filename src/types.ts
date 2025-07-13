export type Season = 'spring' | 'summer' | 'fall' | 'winter' | 'all';

export const seasons: Season[] = ['all', 'spring', 'summer', 'fall', 'winter'];

export interface Food {
  name: string;
  seasons?: Season[];
  image?: string;
}

export type Filter = {
  season: Season;
};
