import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs';

const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title='Búsqueda de SuperHéroes'
        description='Descubre, explora y administra super héroes'
      />

      {/* Breadcrumbs */}
      <CustomBreadcrumbs
        currentPage='Buscador de héroes'
        breadcrumbs={[
          { label: 'home', to: '/' },
          { label: 'home2', to: '/' },
          { label: 'home3', to: '/' },
        ]}
      />

      {/* Stats dashboard */}
      <HeroStats />

      {/* Filter and search */}
      <SearchControls />
    </>
  );
};

export default SearchPage;
