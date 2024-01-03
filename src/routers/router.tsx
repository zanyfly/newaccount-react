import {createBrowserRouter, NavLink, Outlet} from "react-router-dom";
import ErrorPage from "../components/error-page";
import React from "react";
import MainLayout from "../components/layout/MainLayout";
import WelcomeRoutes from "./welcomeRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            { index: true, element: <div>Main Home</div> },
            WelcomeRoutes
        ]
        // children: [ //嵌套路由
        //     { index: true, element: <div>please choose 1 2 3</div> }, //当前路径没有匹配到子元素显示这个
        //     { path: "1", element: <div>1</div> },
        //     { path: "2", element: <div>2</div> },
        //     { path: "3", element: <div>3</div> }
        // ]

    },
]);

export default router