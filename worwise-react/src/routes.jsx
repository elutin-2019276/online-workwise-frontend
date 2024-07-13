import App from "./App";
//import { ContentRole } from "./Shared/ContentRole";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./components/ADMIN/Layout";
import { ContentRole } from "./shared/validators/ContentRole";
//import NavbarLayout from "./Components/CLIENT/NavbarLayout";

//import UsersAdmin from "./pages/admin/UserAdmin";

export const routes = [
    {
      path: '/',
      element: <App />
    },
    {
      path: '/home/*',
      element: <ContentRole />
    },
    {
      path: '*',
      element: <NotFoundPage />
    },
    //Rutas de cliente (agregar coma despues de not found)
  
    //Rutas de admin      
]