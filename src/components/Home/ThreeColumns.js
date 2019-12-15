import React, {Component} from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


class ThreeColumns extends Component {
    render() {
        return <HashRouter>

            <section className={'threeColumns'} id='three-columns'>
                <div className={'flex-box box'}>
                    <div>
                        <h1>10</h1>
                        <h2>oddanych worków</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc
                            Pellentesque vel enim a elit viverra elementuma.
                            Aliquam erat volutpat.
                        </p>
                    </div>

                    <div>
                        <h1>5</h1>
                        <h2>wspartych organizacji</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc
                            Pellentesque vel enim a elit viverra elementuma.
                            Aliquam erat volutpat.
                        </p>
                    </div>

                    <div>
                        <h1>7</h1>
                        <h2>zorganizowanych zbiórek</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc
                            Pellentesque vel enim a elit viverra elementuma.
                            Aliquam erat volutpat.
                        </p>
                    </div>


                </div>
            </section>


        </HashRouter>;

        ;
    }
}

export default ThreeColumns;