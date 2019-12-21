import React, {Component} from 'react';
import {Link,} from 'react-router-dom';
import decoration from '../../assets/Decoration.svg';


class Logout extends Component {
    render() {
        return (<div className='logout'>
                <div className='logout-title'>
                    <h1>Wylogowanie nastąpiło pomyślnie!</h1>
                    <img className={'decoration'} src={decoration}></img>
                </div>
                <button><Link to="./"> Strona główna</Link></button>
            </div>
        )
    }
}
export default Logout;