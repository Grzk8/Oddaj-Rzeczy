import React, {Component} from 'react';
import {
    HashRouter
} from 'react-router-dom';
import decoration from '../../assets/Decoration.svg';
import organizations from '../../Data/whoWeHelp';

class WhoWeHelp extends Component {
    constructor(props) {
        
        };


   //   handleClick = name => () => this.state(name);
    render() {


        return <HashRouter>
            <>
                <section className={'whoWeHelp'} id='WhoWeHelp'>
                    <h1>Komu pomagamy?</h1>
                    <img className={'decoration'} src={decoration}></img>

                    <div className={'who flex-box'}>
                        <p onClick={this.handleClick('Fundacjom')}>Fundacjom</p>
                        <p onClick={this.handleClick('Organizacjom pozarządowym')}>Organizacjom pozarządowym</p>
                        <p onClick={this.handleClick('Zbiórkom lokamnym')}>Lokalnym <br/>zbiórkom</p>
                    </div>
                </section>

            </>
        </HashRouter>;

    }
}

export default WhoWeHelp;