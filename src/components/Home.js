import React from 'react';
import Header from './Header';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import HomeHeader from "./components/HomeHeader";

function Home() {
    return <HashRouter>
        <>
            <h2>home</h2>
            <HomeHeader/>

        </>
    </HashRouter>;

    ;
}

export default Home;
