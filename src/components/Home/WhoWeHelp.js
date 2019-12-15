import React, {Component} from 'react';
import {
    HashRouter
} from 'react-router-dom';
import decoration from '../../assets/Decoration.svg';


class WhoWeHelp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            help: 'Fundacjom',
        }
    };
    componentDidMount() {

        handleClick = name => () => this.fetchData(name);
        fetch('http://localhost:3000/organizations')
            .then( resp=> resp.json())
            .then(data => {
                console.log(data, 'from Api');

                this.setState({
                    help: name
                })
            })
    }

    render() {


        return <HashRouter>
            <>
                <section className={'whoWeHelp'} id='WhoWeHelp'>
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

    }
}

export default WhoWeHelp;