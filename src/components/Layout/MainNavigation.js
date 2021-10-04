import React, {useContext } from 'react';
import { NavLink ,useHistory } from 'react-router-dom';
import AuthContext from '../../store/AuthContext';
import NavCartButton from './NavCartButton';
import classes from './MainNavigation.module.css';

function MainNavigation(props) {
    const ctx = useContext(AuthContext);
    console.log("in main",ctx);
    const history = useHistory();
    const handler = () => {
        history.push('/');
    }

   

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                E-Commerece
            </div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/' activeClassName={classes.active} exact>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/' activeClassName={classes.active}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/' activeClassName={classes.active}>
                            News
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/' activeClassName={classes.active}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            {ctx.isAuthenticated  && 
                <NavCartButton
                    onShowCart={props.onShowCart} 
                /> 
            }
            
            {ctx.isAuthenticated  && 
                <button onClick={() => {ctx.logOut(); handler();}} className={classes.button}>
                        Logout 
                </button>
            }
            
            
            
        </header>
    );
};

export default MainNavigation;