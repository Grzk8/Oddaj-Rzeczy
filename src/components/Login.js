import React, {Component} from "react";
import {
    HashRouter,
    Link,
} from 'react-router-dom';


class Login extends Component{
    render() {
        return <>

            <h3>login</h3>
            <li><Link to="/">Home</Link></li>

        </>
    }
}

export default Login;