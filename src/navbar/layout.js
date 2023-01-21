import { Outlet,Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
const Layout=()=>{
    return(<>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
        </ul>
    </nav>
    <Outlet />
    </>)
}

export default Layout;