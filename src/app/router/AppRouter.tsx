import { Route, Routes } from 'react-router-dom';

import CubePage from '@/pages/CubePage/CubePage';
import MainPage from '@/pages/MainPage/MainPage';

import { ROUTES } from './routes';

type Route = {
  url: string;
  page: JSX.Element;
};

const PAGES: Route[] = [
  {
    url: ROUTES.BASE,
    page: <MainPage />,
  },
  {
    url: ROUTES.CUBE,
    page: <CubePage />,
  },
];

export const AppRouter = () => {
  const getRoutes = (routes: Route[]) => {
    return routes.map(({ url, page }) => <Route key={url} path={url} element={page} />);
  };

  return <Routes>{getRoutes(PAGES)}</Routes>;
};
