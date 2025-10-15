import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { useSearch } from '@/heroes/hooks/useSearch';
import { useSearchParams } from 'react-router';
import { useAllHeroes } from '@/heroes/hooks/useAllHeroes';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') ?? undefined;
  const strength = searchParams.get('strength') ?? undefined;
  const team = searchParams.get('team') ?? undefined;
  const category = searchParams.get('category') ?? undefined;
  const universe = searchParams.get('universe') ?? undefined;
  const status = searchParams.get('status') ?? undefined;

  const { data: searchHeroes = [] } = useSearch({
    name,
    strength,
    team,
    category,
    universe,
    status,
  });
  const { data: allHeroes } = useAllHeroes();

  const teams = allHeroes?.heroes.map((hero) => hero.team) ?? [];
  const categories = allHeroes?.heroes.map((hero) => hero.category) ?? [];
  const universes = allHeroes?.heroes.map((hero) => hero.universe) ?? [];
  const statuses = allHeroes?.heroes.map((hero) => hero.status) ?? [];

  const uniqueTeams = Array.from(new Set(teams));
  const uniqueCategories = Array.from(new Set(categories));
  const uniqueUniverses = Array.from(new Set(universes));
  const uniqueStatuses = Array.from(new Set(statuses));

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
      <SearchControls
        teams={uniqueTeams}
        categories={uniqueCategories}
        universes={uniqueUniverses}
        statuses={uniqueStatuses}
      />

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
