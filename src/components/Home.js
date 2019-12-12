import React, {Component} from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import HomeHeader from './Home/HomeHeader';
import ThreeColumns from './Home/ThreeColumns';
import SimpleSteps from './Home/SimpleSteps';
import AboutUs from './Home/AboutUs';
import WhoWeHelp from './Home/WhoWeHelp';
import Contact from './Home/Contact';

function Home() {
    return <HashRouter>
        <>
            <HomeHeader/>
            <ThreeColumns/>
            <SimpleSteps/>
            <AboutUs/>
            <WhoWeHelp/>
            <Contact/>

        </>
    </HashRouter>;

    ;
}

export default Home;
