
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/img_avatar2.png'
import classes from './Login.module.css';

const initialState = {
    email: '',
    password: '',
    emailValid: '',
    passwordValid: '',
};
export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleChange = (event) => {
        const isCheckBox = event.target.type === 'checkbox';
        this.setState({
            [event.target.name]: isCheckBox 
                ? event.target.checked: 
                event.target.value
        });
    };

    validate = () => {
        let emailValid = '';
        let passwordValid = '';
        if (this.state.email.trim() !== '' && !this.state.email.includes('@')){
            emailValid = 'Please enter a valid email address that includes @.'
        }

        if (this.state.password.trim() !== '' && this.state.password.trim().length < 6){
            passwordValid = 'Please enter a password of length 6 and higher.'
        }

        if (emailValid || passwordValid){
            this.setState({emailValid, passwordValid});
            return false;
        }
        return true;
    };

    formSubmitHandler = (event) =>{
        event.preventDefault();
        const isValid = this.validate();
        if (isValid){
            console.log(this.state);
            // clear Form 
            this.setState(initialState);
            // this.props.history.push('/home');
        }
        
    };

    render() {
        return (
            <div className={classes.tabcontent}>
                <h1>Welcome Back  Tekrar Hoşgeldiniz</h1>
                <form onSubmit={this.formSubmitHandler}>
                    <div className={classes.imgcontainer}>
                        <img src={avatar} alt="Avatar" style={{ width: '50%' , borderRadius: '50%'}} />
                    </div>
                    <div className={this.emailInputClasses} >
                        <label htmlFor="email"><b>Email</b></label>
                        <input 
                            name="email"
                            type="text" 
                            placeholder="Enter Email"  
                            value={this.state.email} 
                            onChange={this.handleChange}
                        />
                        <div className={classes.invalid}>{this.state.emailValid}</div>

                        <label htmlFor="psw"><b>Password</b></label>
                        <input 
                            name="password"
                            type="password" 
                            placeholder="Enter Password" 
                            value={this.state.password}
                            onChange={this.handleChange}
                        /> 
                        <div className={classes.invalid}>{this.state.passwordValid}</div>
                    </div>
                    <Link to='/signup'>Create New Account!</Link>
                        <button>
                            Login 
                        </button><br></br>
                    <button type="button" className={classes.cancel} >Cancel</button>
                </form>
            </div>
        );
    };
};

export default Login;
