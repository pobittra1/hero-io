import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Install from "../pages/Install/Install";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AppDetails from "../pages/AppDetails/AppDetails";

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
                loader: () => fetch("apps-data.json").then(res => res.json()),
                element: <Apps></Apps>
            },
            {
                path: "/install",
                loader: () => fetch("apps-data.json").then(res => res.json()),
                element: <Install></Install>
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            },
            {
                path: "/app/:id",
                loader: async ({ params }) => {
                    const res = await fetch("/apps-data.json");
                    const data = await res.json();
                    const singleApp = data.find(app => app.id == params.id);

                    return singleApp;
                },
                element: <AppDetails></AppDetails>
            }
        ]
    }
])