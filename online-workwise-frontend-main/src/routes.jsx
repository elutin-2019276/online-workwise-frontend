import App from "./App";
//import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { ViewWorkOffer } from "./components/WorkOffer/ViewWorkOffer";

export const routes = [
    {
        path: '/',
        element: <App />
    },
    {
        path: '*',
        element: <ViewWorkOffer/>
        //element: <NotFoundPage />
    }
]