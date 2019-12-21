import React, {Component} from 'react';
import {
    HashRouter
} from 'react-router-dom';
import decoration from '../../assets/Decoration.svg';

import organizations from '../../Data/whoWeHelp';

class WhoWeHelp extends Component {

        state= {
            org: 1,
            list: organizations.organizations,
            currentPage: 1,
            orgPerPage: 3,
        }

        render() {
            return(
              <section className={'whoWeHelp'}>
                  <h1>Komu pomagamy?</h1>
                  <img className={'decoration'} src={decoration}></img>

                  <div className={'who flex-box'}>
                      <p onClick={() => this.handleClick(0)}>{this.state.list[0].navName}</p>
                      <p onClick={() => this.handleClick(1)}>{this.state.list[1].navName}</p>
                      <p onClick={() => this.handleClick(2)}>{this.state.list[2].navName}</p>
                  </div>
                  <p className={'description'}>{this.state.list[this.state.org].description}</p>
                    <div>


                    </div>
              </section>
            );
        }

}


export default WhoWeHelp;