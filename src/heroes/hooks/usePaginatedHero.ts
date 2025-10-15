import { useQuery } from '@tanstack/react-query';
import { getHeroesByPageAction } from '../actions/getHeroesByPage.action';

interface Props {
  page: number;
  limit: number;
  category: string;
}

export const usePaginatedHero = ({ limit, page, category }: Props) => {
  return useQuery({
    queryKey: ['heroes', { category, page, limit }],
    queryFn: () => getHeroesByPageAction(+page, +limit, category),
    staleTime: 1000 * 60 * 5,
  });
};
