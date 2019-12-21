import React, {Component} from "react";
import {
    HashRouter,
    Link,
} from 'react-router-dom';
import decoration from "../assets/Decoration.svg";
import {Link as ScrollLink} from "react-scroll";


class Login extends Component{
    state = {
        login: "",
        pass: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    handleSubmit = () => {
        console.log('dupa');
    };

    render() {
        return <>

            <div className={'menu'}>
                <ul className={'links flex-box'}>
                    <li><Link className={'link'} to="/login">Zaloguj</Link></li>
                    <li><Link className={'link'} to="/register">Załóż konto</Link></li>
                </ul>

                <div className={'menuScroll'}>
                    <ul className='scrollList flex-box'>
                        <li><ScrollLink className='ScrollLink start' to={'HomeHeader'} spy={true}>Start</ScrollLink></li>
                        <li><ScrollLink className='ScrollLink' to={'ThreeColumns'} spy={true}>O co chodzi?</ScrollLink></li>
                        <li><ScrollLink className='ScrollLink' to={'AboutUs'} spy={true}>O nas</ScrollLink></li>
                        <li><ScrollLink className='ScrollLink' to={'WhoWeHelp'} spy={true}>Fundacja i organizacje</ScrollLink></li>
                        <li><ScrollLink className='ScrollLink' to={'Contact'} spy={true}>Kontakt</ScrollLink></li>
                    </ul>
                </div>
            </div>



            <div className='form__log'>
                <h2>Zaloguj się</h2>
                <img className={'decoration'} src={decoration}></img>
                <form className='form_'>
                    <p  className='form__log' >Email</p>
                    <input onChange={this.handleChange} name='login' className='form__log--style' type='text'/>
                    <p className='form__log' >Hasło</p>
                    <input onChange={this.handleChange} name='pass' className='form__log--style'  type='password'/>
                </form>
                <div className="form_log_acount">
                    <Link className='link' to="/">Załuż konto</Link>
                    <button onClick={this.handleSubmit} className="form__submit" type='submit'>Zaloguj się</button>
                </div>
            </div>

        </>
    }
}

export default Login;