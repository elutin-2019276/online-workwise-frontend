import App from "./App";
import { Authentication } from "./pages/Auth/Authentication";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { ContentRole } from "./shared/validators/ContentRole";
import { RoleBasedRedirect } from "./shared/validators/RoleBasedRedirect";
import { AdminHome } from './pages/admin/AdminHome';
import { HomeClient } from './pages/client/HomeClient';
//Import Cliente
//import { Profession } from '../src/components/CLIENT/Profession/Profession'
//import NavbarLayout from "./components/CLIENT/NavbarLayout";

export const routes = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/worwise',
    element: <RoleBasedRedirect />
  },
  {
    path: '/worwise/auth',
    element: <Authentication />
  },
  {
    path: '/worwise/admin',
    element: <AdminHome />
  },
  {
    path: '/worwise/client',
    element: <HomeClient />
  },
  {
    path: '/worwise/*',
    element: <ContentRole />
  },
  // //Rutas del cliente
  // {
  //   path: '/home/worwise/Profession',
  //   element: <NavbarLayout><Profession /><NavbarLayout/>
  // },
  {
    path: '*',
    element: <NotFoundPage />
  }
];
