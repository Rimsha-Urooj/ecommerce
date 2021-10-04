import React, {Component} from "react";
import { userInfo } from "../services/auth";

const AuthContext = React.createContext();

export class AuthProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            isAuthenticated: false,
        }
    }

    logIn = () => {
        const user = userInfo();
        this.setState({
            username:  user.name,
            isAuthenticated: true,
        });
    }

    logOut = () => {
        this.setState({
            username: '',
            isAuthenticated: false,
        });   
    }

   
    render(){
        const {username, isAuthenticated} = this.state;
        const {logIn, logOut} = this;
        return(
            <AuthContext.Provider
                value={{
                   username,
                   isAuthenticated,
                   logIn,
                   logOut}
                }
            >
                {this.props.children}
            </AuthContext.Provider>
        );
    }
    
}

export default AuthContext;