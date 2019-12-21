import React, {Component} from "react";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import decoration from '../../assets/Decoration.svg';
import {render} from "react-dom";

class Contact extends Component{
    state = {
      name: "",
      mail: "",
      errormsg: "",
      message: "",
      orderCompleted: false,
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmitForm = (e) => {
        e.preventDefault();
        this.setState({
            errorMsg: ""
        });

        if (this.state.mail.indexOf("@") === -1) {
            this.setState({
                errorMsg: "Błędny adres email"
            })

            return false;
        }else{
            fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`,{method: 'POST',
                body:JSON.stringify({name: this.state.name, mail: this.state.mail, message: this.state.message}),headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(resp => resp.json())
                .then(data => {
                    this.setState({
                        orderCompleted: true,
                    })

                })
        }

    }


    render() {
        return(
            <>
                <section className={'contact flex-box'} id='Contact'>

                    <div className={'contact-img'}></div>

                    <div className={'contact-form'}>
                        <div className={'cnt'}>
                            <h1>Skontaktuj się z nami</h1>
                            <span>{this.state.errormsg}</span>
                            <img className={'decoration'} src={decoration}></img>
                        </div>

                         <form className={'form'} onSubmit={this.handleSubmitForm}>
                                <div className={'nameEmail flex-box'}>

                                    <div className={'name'}>
                                    <label>Wpisz swoje imię</label>
                                    <input type="text" name="name" value={this.state.name} placeholder="imię" onChange={this.handleChange}/>
                                    </div>

                                    <div className={'email'}>
                                    <label>Wpisz swój email</label>
                                    <input type="text" name="mail" value={this.state.mail} placeholder="Email" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className={'message flex-box'}>
                                    <label>Wpisz swoją wiadomość</label>
                                    <textarea name="description" value={this.state.description} onChange={this.handleChange} placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, voluptate. " onChange={this.handleChange}/>
                                </div>
                                <input className="btn" type="submit" value="WYŚLIJ"/>
                         </form>
                    </div>

                </section>
            </>
        );
    }
}
export default Contact;