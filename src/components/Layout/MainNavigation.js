import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
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
        </header>
    );
};

export default MainNavigation;