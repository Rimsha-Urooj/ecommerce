import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './SignUp.module.css';


const initialState = {
    name: '',
    email: '',
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

    validate = () => {
        let validName = '';
        let validEmail = '';
        let validPassword = '';
        let validRepeatPassword = '';

    };

    submitHandler = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid){
            console.log(this.state);
            // reload form
            this.setState(initialState);
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
                            onChange={this.handleChange} 
                        />

                        <label htmlFor="email"><b>Email</b></label>
                        <input 
                            type="email" 
                            placeholder="Enter Email" 
                            name="email"
                            onChange={this.handleChange} 
                        /> 
                        
                        <label htmlFor="city"><b>City</b></label>
                        <input 
                            type="text" 
                            placeholder="Enter City" 
                            name="city" 
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
                            name="psw"
                            onChange={this.handleChange} 
                        />
                        <p id="demo1"></p>
                
                        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                        <input 
                            type="password" 
                            placeholder="Repeat Password" 
                            name="psw-repeat"
                            onChange={this.handleChange}
                        />
                        
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

export default SignUp;
