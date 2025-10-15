import { createBrowserRouter, Navigate } from 'react-router';

import { HeroesLayout } from '@/heroes/layouts/HeroesLayout';
import { AdminLayout } from '@/admin/layouts/AdminLayout';
import { lazy } from 'react';

const HomePage = lazy(() => import('@/heroes/pages/home/HomePage'));
const HeroPage = lazy(() => import('@/heroes/pages/hero/HeroPage'));
const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage'));
const AdminPage = lazy(() => import('@/admin/pages/AdminPage'));

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HeroesLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/heroes/:idSlug', element: <HeroPage /> },
      { path: '/search', element: <SearchPage /> },
      { path: '*', element: <Navigate to='/' /> },
    ],
  },

  {
    path: '/admin',
    element: <AdminLayout />,
    children: [{ index: true, element: <AdminPage /> }],
  },
]);
