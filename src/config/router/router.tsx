import { createBrowserRouter, RouteObject } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not-found'
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*'
};

export const routeToRouteObjectMap: Record<AppRoutes, RouteObject> = {
  [AppRoutes.MAIN]: {
    path: routePath.main,
    element: <HomePage />
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
