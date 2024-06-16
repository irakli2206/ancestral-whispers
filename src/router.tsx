import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/home";
import Root from "./layouts/root";
import Reconsructions from "./pages/reconstructions";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/reconstructions',
                element: <Reconsructions />
            }
        ]
    },
]);

export default router