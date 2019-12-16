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
                    <li><ScrollLink className='ScrollLink start' to={'HomeHeader'} spy={true}>Start</ScrollLink></li>
                    <li><ScrollLink className='ScrollLink' to={'ThreeColumns'} spy={true}>O co chodzi?</ScrollLink></li>
                    <li><ScrollLink className='ScrollLink' to={'SimpleSteps'} spy={true}>O nas</ScrollLink></li>
                    <li><ScrollLink className='ScrollLink' to={'WhoWeHelp'} spy={true}>Fundacja i organizacje</ScrollLink></li>
                    <li><ScrollLink className='ScrollLink' to={'Contact'} spy={true}>Kontakt</ScrollLink></li>
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
