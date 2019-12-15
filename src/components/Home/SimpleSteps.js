import React from 'react';
import {
    HashRouter,
    Link
} from 'react-router-dom';
import decoration from '../../assets/Decoration.svg';
import icon_1 from '../../assets/Icon-1.svg';
import icon_2 from '../../assets/Icon-2.svg';
import icon_3 from '../../assets/Icon-3.svg';
import icon_4 from '../../assets/Icon-4.svg';


function SimpleSteps() {
    return <HashRouter>
        <>
            <section className={'simpleSteps'} id='SimpleSteps'>
                <h1>Wystarczą 4 proste kroki</h1>
                <img className={'decoration'} src={decoration}></img>

                <div className={'steps'}>
                    <div className={'steps-container flex-box'}>
                        <div className={'step'}>
                            <img src={icon_1}></img>
                            <p>Wybierz rzeczy</p>
                            <p>ubrania, zabawki, sprzęt i inne</p>
                        </div>

                        <div className={'step'}>
                            <img src={icon_2}></img>
                            <p>Spakuj je</p>
                            <p>skożystaj z worków na śmieci</p>
                        </div>

                        <div className={'step'}>
                            <img src={icon_3}></img>
                            <p>Zdecyduj komu chcesz pomóc</p>
                            <p>wybierz zaufane miejsce</p>
                        </div>

                        <div className={'step'}>
                            <img src={icon_4}></img>
                            <p>Zamów kuriera</p>
                            <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                </div>
                <div className={'button'}>
                    <Link className='link' to="/">ODDAJ RZECZY</Link>
                </div>

            </section>

        </>
    </HashRouter>;

    ;
}

export default SimpleSteps;