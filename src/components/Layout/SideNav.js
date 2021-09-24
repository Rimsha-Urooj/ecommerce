import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './SideNav.module.css';

function SideNav() {
    return (
        <div className={classes.header1}>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/login' activeClassName={classes.active} exact>
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/signup' activeClassName={classes.active}>
                            Signup
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/' activeClassName={classes.active}>
                            Forget Password
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideNav;