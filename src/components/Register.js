import React from 'react';
import {
    HashRouter,
    Link,
} from 'react-router-dom';

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