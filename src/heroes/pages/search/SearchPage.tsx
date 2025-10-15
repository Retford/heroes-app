import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { useSearch } from '@/heroes/hooks/useSearch';
import { useSearchParams } from 'react-router';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') ?? undefined;
  const strength = searchParams.get('strength') ?? undefined;
  const { data: searchHeroes = [] } = useSearch({ name, strength });

  return (
    <>
      <CustomJumbotron
        title='Búsqueda de SuperHéroes'
        description='Descubre, explora y administra super héroes'
      />

      {/* Breadcrumbs */}
      <CustomBreadcrumbs currentPage='Buscador de héroes' />

      {/* Stats dashboard */}
      <HeroStats />

      {/* Filter and search */}
      <SearchControls />

      {/* Heroes result */}
      {searchHeroes.length !== 0 ? (
        <HeroGrid heroes={searchHeroes} />
      ) : (
        <div>No hay resultados</div>
      )}
    </>
  );
};

export default SearchPage;
