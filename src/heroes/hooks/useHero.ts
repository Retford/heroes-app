import { useQuery } from '@tanstack/react-query';
import { getHeroAction } from '../actions/getHero.action';

export const useHero = (idSlug: string) => {
  return useQuery({
    queryKey: ['hero', idSlug],
    queryFn: () => getHeroAction(idSlug),
    staleTime: 1000 * 6 * 5,
    retry: false,
  });
};
