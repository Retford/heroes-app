import { heroAPI } from '../api/hero.api';
import type { HeroesResponse } from '../interfaces/getHero.response.interface';

export const getAllHeroesAction = async (): Promise<HeroesResponse> => {
  const { data } = await heroAPI.get('/', {
    params: {
      limit: 100,
    },
  });
  return data;
};
