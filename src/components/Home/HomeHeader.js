import React from 'react';
import {
    HashRouter,
    Link
} from 'react-router-dom';
import decoration from '../../assets/Decoration.svg';

function HomeHeader() {
    return <HashRouter>
        <>
          <header className={'headArticle flex-box'} id='HomeHeader'>
                   <div className={'pcs'}>
                   </div>

                <div className={'rscontainer flex-box'}>
                    <h1>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img className={'decoration'} src={decoration}></img>
                    <div className={'header_buttons flex-box'}>
                        <div className={'btn'}>
                            <Link to='/'>
                                <Link className={'link'}>Oddaj<br/> rzeczy</Link>
                            </Link>
                        </div>
                        <div className={'btn'}>
                            <Link to='/'>
                                <Link className={'link'}>Zorganizuj zbiórkę</Link>
                            </Link>
                        </div>
                    </div>
                </div>
          </header>
        </>
    </HashRouter>;

    ;
}

export default HomeHeader;