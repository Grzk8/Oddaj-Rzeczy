import React, {Component} from "react";
import {
    HashRouter,
    Link
} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import HomeHeader from './Home/HomeHeader';
import ThreeColumns from './Home/ThreeColumns';
import SimpleSteps from './Home/SimpleSteps';
import AboutUs from './Home/AboutUs';
import WhoWeHelp from './Home/WhoWeHelp';
import Contact from './Home/Contact';


function Home() {
    return <HashRouter>
        <>
            <div className={'menu'}>
                <ul className={'logUl'}>
                    <li><Link className={'link'} to="/login">Zaloguj</Link></li>
                    <li><Link className={'link'} to="/register">Załóż konto</Link></li>
                </ul>
                <ul className='scrollList flex-box'>
                    <li><scrollLink className='scrollLink start' to={HomeHeader} spy={true}>Start</scrollLink></li>
                    <li><scrollLink className='scrollLink' to={ThreeColumns} spy={true}>O co chodzi?</scrollLink></li>
                    <li><scrollLink className='scrollLink' spy={true}>O nas</scrollLink></li>
                    <li><scrollLink className='scrollLink' spy={true}>Fundacja i organizacje</scrollLink></li>
                    <li><scrollLink className='scrollLink' spy={true}>Kontakt</scrollLink></li>
                </ul>
            </div>

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
