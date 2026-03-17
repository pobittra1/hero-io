import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Install from "../pages/Install/Install";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/apps",
                element: <Apps></Apps>
            },
            {
                path: "/install",
                element: <Install></Install>
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])