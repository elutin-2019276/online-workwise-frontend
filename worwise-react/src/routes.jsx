import { RoleBasedRedirect } from "./shared/validators/RoleBasedRedirect";
import App from "./App";
import { Authentication } from "./pages/Auth/Authentication";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
//Roles
import { ContentRole } from "./shared/validators/ContentRole";
//Admin
import { AdminHome } from './pages/admin/AdminHome';
//Client
import { HomeClient } from './pages/client/HomeClient';

export const routes = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/worwise',
    element: <RoleBasedRedirect/>
  },
  {
    path: '/worwise/auth',
    element: <Authentication/>
  },
  {
    path: '/worwise/*',
    element: <ContentRole/>
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
];
