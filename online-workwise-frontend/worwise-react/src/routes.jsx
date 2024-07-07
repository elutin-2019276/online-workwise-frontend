import App from "./App";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

export const routes = [
    {
        path: '/',
        element: <App />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]