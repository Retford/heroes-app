import { useQuery } from '@tanstack/react-query';
import { getAllHeroesAction } from '../actions/getAllHeroes.action';

export const useAllHeroes = () => {
  return useQuery({
    queryKey: ['all-heroes'],
    queryFn: getAllHeroesAction,
    staleTime: 1000 * 60 * 5,
  });
};
