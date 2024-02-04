import {NavLink, Outlet} from "react-router-dom";
import React from "react";
import Welcome1 from "../pages/welcome1";
import Welcome2 from "../pages/welcome2";
import WelcomeLayout from "../layout/WelcomeLayout";

const WelcomeRoutes = {
    path: "welcome",
    element: <WelcomeLayout/>,
    children: [
        { path: "1", element: <Welcome1/>},
        { path: "2", element: <Welcome2/>},
    ]
}

export default WelcomeRoutes