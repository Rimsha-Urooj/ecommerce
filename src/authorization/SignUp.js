import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import classes from './SignUp.module.css';


const initialState = {
    name: '',
    email: '',
    city: '',
    password: '',
    repeatPassword: '',
    validName: '',
    validEmail: '',
    validPassword: '',
    validRepeatPassword: '',
};
class SignUp extends Component {
    constructor(props) {
        super(props)
    
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

    handleRepeatPasswordChange = (event) => {
        const repeatPassword = event.target.value;
        this.setState({repeatPassword});
    };

    validate = () => {
        let validName = '';
        let validEmail = '';
        let validPassword = '';
        let validRepeatPassword = '';

        console.log(this.state.name);

        if (this.state.name.trim().length < 2 ){
            validName = 'Please enter a the name.';
        }

        console.log(this.state.city);
        console.log(this.state.email);

        if (this.state.email.trim() !== ''){
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

            if (!pattern.test(this.state.email)) {
                validEmail = 'Please enter a valid email address.';
            }
        }

        console.log(this.state.password);

        if (this.state.password.trim() !== '' && +this.state.password.trim().length < 6){
            validPassword = 'Please enter a password of length 6 and higher.'
        }

        console.log(this.state.repeatPassword);
        if (this.state.repeatPassword !== this.state.password){
            console.log('In if statement');
            validRepeatPassword = 'Please enter the same password as above.';
        }

        if (validEmail || validPassword || validName || validRepeatPassword){
            this.setState({validEmail, validPassword, validName, validRepeatPassword});
            return false;
        }
        return true;

    };

    submitHandler = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid){
            console.log(this.state);
            // reload form
            this.setState(initialState);
            alert("Signup successfully");
            this.props.history.push('/login');
        }
    };
    
    render() {
        return (
            <div className={classes.tabcontent}>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <h1>Welcome Hoşgeldiniz Sign Up</h1>
                        <p>Please fill in this form to create an account.</p>
                        
                        <label htmlFor="name"><b>Name</b></label>
                        <input 
                            type="text" 
                            placeholder="Enter your Name" 
                            name="name" 
                            value={this.state.name}
                            onChange={this.handleChange} 
                        />
                        <div className={classes.invalid}>{this.state.validName}</div>

                        <label htmlFor="email"><b>Email</b></label>
                        <input 
                            type="text" 
                            placeholder="Enter Email" 
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange} 
                        /> 
                        <div className={classes.invalid}>{this.state.validEmail}</div>
                        
                        <label htmlFor="city"><b>City</b></label>
                        <input 
                            type="text" 
                            placeholder="Enter City" 
                            name="city" 
                            value={this.state.city}
                            onChange={this.handleChange}
                            required 
                        />

                        <label ><b>Select Gender</b></label><br></br>
                        <input 
                            type="radio" 
                            id="male" 
                            name="gender" 
                            value="Male"
                        />
                        <label htmlFor="male">Male</label>
                        <input 
                            type="radio" 
                            id="female" 
                            name="gender" 
                            value="Female"
                        />
                        <label htmlFor="female">Female</label><br></br>
                
                        <label htmlFor="psw"><b>Password</b></label>
                        <input 
                            type="password" 
                            placeholder="Enter Password" 
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required 
                        />
                        <div className={classes.invalid}>{this.state.validPassword}</div>
                
                        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                        <input 
                            type="password" 
                            placeholder="Repeat Password" 
                            name="passwordRepeat"
                            value={this.state.repeatPassword}
                            onChange={this.handleRepeatPasswordChange}
                        />
                        <div className={classes.invalid}>{this.state.validRepeatPassword}</div>
                        
                        <div>
                        <Link to='/login'>Login!</Link>
                        <button >Sign Up</button>
                        <button type="button" className={classes.cancel} >Cancel</button>
                        
                        </div>
                    </div>
                </form>
            </div>
        );
    };
};

export default withRouter(SignUp);
