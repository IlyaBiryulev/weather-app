import { Route, Routes } from 'react-router-dom';

import MainPage from '@/pages/MainPage/MainPage';

import { ROUTES } from './routes';

type Route = {
  url: string;
  page: JSX.Element;
  children?: Route[];
};

const PAGES: Route[] = [
  {
    url: ROUTES.BASE,
    page: <MainPage />,
  },
];

export const AppRouter = () => {
  const getRoutes = (routes: Route[]) => {
    return routes.map(({ url, page, children }) => (
      <Route key={url} path={url} element={page}>
        {children && getRoutes(children)}
      </Route>
    ));
  };

  return <Routes>{getRoutes(PAGES)}</Routes>;
};
