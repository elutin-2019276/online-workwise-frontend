import App from "./App";
import { Authentication } from "./pages/Auth/Authentication";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { ContentRole } from "./shared/validators/ContentRole";
import { RoleBasedRedirect } from "./shared/validators/RoleBasedRedirect";
import { AdminHome } from "./pages/admin/AdminHome";
import { HomeClient } from "./pages/client/HomeClient";
import { ProfessionClient } from "./pages/client/professionClient";
import { EmployerClient } from "./pages/client/EmployerClient"; // Importa el nuevo componente EmployerClient

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/worwise",
    element: <RoleBasedRedirect />,
  },
  {
    path: "/worwise/auth",
    element: <Authentication />,
  },
  {
    path: "/worwise/admin",
    element: <AdminHome />,
  },
  {
    path: "/worwise/client",
    element: <HomeClient />,
  },
  {
    path: "/worwise/profession",
    element: <ProfessionClient />,
  },
  {
    path: "/worwise/employer", // Nueva ruta para EmployerClient
    element: <EmployerClient />,
  },
  {
    path: "/worwise/*",
    element: <ContentRole />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
