import { BASE_URL, heroAPI } from '../api/hero.api';
import type { Hero } from '../interfaces/hero.interface';

export const getHeroAction = async (idSlug: string): Promise<Hero> => {
  const { data } = await heroAPI.get<Hero>(`/${idSlug}`);

  return {
    ...data,
    image: `${BASE_URL}/images/${data.image}`,
  };
};
