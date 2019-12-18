import React, {Component} from 'react';
import {
    HashRouter
} from 'react-router-dom';
import decoration from '../../assets/Decoration.svg';

import organizations from '../../Data/whoWeHelp';

class WhoWeHelp extends Component {

        state= {
            org: 1,
            currentPage: 1,
            listPerPage: 3,
        }


        handleClick = (currentorg) =>{
            this.setState({
                org: currentorg
            })
}
    render() {
        console.log(organizations.organizations[1].description);

        const orgn = organizations.organizations;
        return <HashRouter>
            <>
                <section className={'whoWeHelp'} id='WhoWeHelp'>
                    <h1>Komu pomagamy?</h1>
                    <img className={'decoration'} src={decoration}></img>

                    <div className={'who flex-box'}>
                        <p onClick={() => this.handleClick(0)}>{orgn[0].navName}</p>
                        <p onClick={() => this.handleClick(1)}>{orgn[1].navName}</p>
                        <p onClick={() => this.handleClick(2)}>{orgn[2].navName}</p>
                    </div>
                    <p className={'description'}>{orgn[this.setState.org].description}</p>
                    <div>
                        list.map(element=>(
                        <tr>
                            <td>{orgn.name}
                            <p>{orgn.mission}</p>
                            </td>
                            <td>{orgn.things}</td>
                        </tr>
                        )
                    </div>
                    <div>{orgn.things}</div>
                </section>

            </>
        </HashRouter>;

    }
}

export default WhoWeHelp;