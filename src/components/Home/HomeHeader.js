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
          <article className={'headArticle'}>
            <section className={'leftSide'}>
                <div className={'pcs'}>

                </div>
            </section>
            <section className={'rightSide'}>
                <div className={'rscontainer'}>
                    <div className={'log'}>
                        <ul className={'logUl'}>
                            <li><Link to="/login">Zaloguj</Link></li>
                            <li><Link to="/register">Załóż konto</Link></li>
                        </ul>
                    </div>
                    <div className={'menu'}>

                    </div>
                    <div className={'text'}>

                    </div>
                    <div className={'decoration'}>

                    </div>
                    <div className={'rsbtns'}>

                    </div>
                </div>
            </section>
          </article>
        </>
    </HashRouter>;

    ;
}

export default HomeHeader;