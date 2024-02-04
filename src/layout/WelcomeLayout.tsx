import {Outlet} from "react-router-dom";

function WelcomeLayout() {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    )
}
export default WelcomeLayout