import React from 'react';
import {
    HashRouter
} from 'react-router-dom';
import decoration from '../../assets/Decoration.svg';
import signature from '../../assets/Signature.svg';


function AboutUs() {
    return <HashRouter>
        <>
            <section className={'aboutUs flex-box'} id='AboutUs'>
                <div className={'about'}>
                    <h1>O nas</h1>
                    <img className={'decoration'} src={decoration}></img>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                        black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <img className={'signature'} src={signature}></img>
                </div>

                <div className={'about-img'}></div>
            </section>

        </>
    </HashRouter>;

    ;
}

export default AboutUs;