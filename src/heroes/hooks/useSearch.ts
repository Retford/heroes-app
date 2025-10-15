import { useQuery } from '@tanstack/react-query';
import { searchHeroesAction } from '../actions/searchHeroes.action';

interface Props {
  name?: string;
  team?: string;
  category?: string;
  universe?: string;
  status?: string;
  strength?: string;
}

export const useSearch = ({
  category,
  name,
  status,
  strength,
  team,
  universe,
}: Props) => {
  return useQuery({
    queryKey: ['search', { category, name, status, strength, team, universe }],
    queryFn: () =>
      searchHeroesAction({ category, name, status, strength, team, universe }),
    staleTime: 1000 * 60 * 5,
  });
};
