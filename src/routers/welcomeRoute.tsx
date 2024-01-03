import {NavLink, Outlet} from "react-router-dom";
import React from "react";
import Welcome1 from "../pages/welcome1";
import Welcome2 from "../pages/welcome2";

const WelcomeRoutes = {
    path: "welcome",
    element: <Outlet/>,
    children: [
        { path: "1", element: <Welcome1/>},
        { path: "2", element: <Welcome2/>},
    ]
}

export default WelcomeRoutes