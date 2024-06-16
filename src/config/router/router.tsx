import { createBrowserRouter, RouteObject } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import SearchPage from '../../pages/SearchPage/SearchPage';

export enum AppRoutes {
  HOME = 'home',
  SEARCH = 'search',
  ABOUT = 'about',
  NOT_FOUND = 'not-found'
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.SEARCH]: '/search',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*'
};

export const routeToRouteObjectMap: Record<AppRoutes, RouteObject> = {
  [AppRoutes.HOME]: {
    path: routePath.home,
    element: <HomePage />
  },
  [AppRoutes.SEARCH]: {
    path: routePath.search,
    element: <SearchPage />
  },
  [AppRoutes.ABOUT]: {
    path: routePath.about,
    element: <div>2</div>
  },
  [AppRoutes.NOT_FOUND]: {
    path: routePath['not-found'],
    element: <div>3</div>
  }
};

const router = createBrowserRouter(Object.values(routeToRouteObjectMap));

export default router;
