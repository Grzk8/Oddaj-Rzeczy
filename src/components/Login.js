import React, {Component} from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Home from "./Home";

class Login extends Component{
    render() {
        return <>

            <h3>login</h3>
            <li><Link to="/">Home</Link></li>

        </>
    }
}

export default Login;