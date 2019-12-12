import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Home from "./Home";

function Register() {
    return <HashRouter>
        <>
            <h3>Register</h3>
            <li><Link to="/">Home</Link></li>

        </>
    </HashRouter>;

    ;
}

export default Register;