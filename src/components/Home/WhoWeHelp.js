import React, {Component} from 'react';
import {
    HashRouter
} from 'react-router-dom';
import decoration from '../../assets/Decoration.svg';

import organizations from '../../Data/whoWeHelp';

class WhoWeHelp extends Component {

        state= {
            org: 1,
            list: [],
            currentPage: 1,
            orgPerPage: 3,
        }


        handleClick = (currentorg) =>{
            this.setState({
                org: currentorg
            })
}


    handleClickPage= (e)=> {
        this.setState({
            currentPage: i
        })


        render() {


            const {list, currentPage, orgPerPage} = this.state;

            const lastOrg = currentPage * orgPerPage;
            const firstOrg = lastOrg - orgPerPage;
            const currentList = list.slice(firstOrg, lastOrg);


            const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(list.length / orgPerPage); i++) {
                const page = <li onClick={e => this.handleClickPage(e)}
                                 {this.state.currentPage === i ? "active" : ""}>{i}</li>
                pageNumbers.push(page)
            }


            const orgn = organizations.organizations;
            console.log(orgn[1].description);

        }

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

                    <div className="pages">
                        <ul>
                            {pageNumbers}
                        </ul>
                    </div>
                </section>

            </>
        </HashRouter>;

    }
}

export default WhoWeHelp;