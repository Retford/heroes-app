import { BASE_URL, heroAPI } from '../api/hero.api';
import type { Hero } from '../interfaces/hero.interface';

interface Options {
  name?: string;
  team?: string;
  category?: string;
  universe?: string;
  status?: string;
  strength?: string;
}

export const searchHeroesAction = async ({
  name,
  category,
  status,
  strength,
  team,
  universe,
}: Options): Promise<Hero[]> => {
  if (!name && !category && !status && !strength && !team && !universe)
    return [];

  const { data } = await heroAPI.get<Hero[]>('/search', {
    params: {
      name,
      team,
      category,
      status,
      strength,
      universe,
    },
  });

  const heroes = data.map((hero) => ({
    ...hero,
    image: `${BASE_URL}/images/${hero.image}`,
  }));

  return heroes;
};
