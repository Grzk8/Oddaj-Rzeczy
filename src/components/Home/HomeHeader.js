import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import App from "../../App";
import Home from "../Home";

function HomeHeader() {
    return <HashRouter>
        <>
            <h3>home Header</h3>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </>
    </HashRouter>;

    ;
}

export default HomeHeader;