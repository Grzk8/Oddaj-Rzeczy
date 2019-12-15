import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import decoration from '../../assets/Decoration.svg';


function WhoWeHelp() {
    return <HashRouter>
        <>
            <section className={'whoWeHelp'}>
                <h1>Komu pomagamy?</h1>
                <img className={'decoration'} src={decoration}></img>

                <div className={'who flex-box'}>
                    <p>Fundacjom</p>
                    <p>Organizacjom pozarządowym</p>
                    <p>Lokalnym <br/>zbiórkom</p>
                </div>
            </section>

        </>
    </HashRouter>;

    ;
}

export default WhoWeHelp;