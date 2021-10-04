import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Welcome.module.css';
import Layout from '../Layout/Layout';


function Welcome() {
    const history = useHistory();
    const buttonClickHandler = () => {
        history.push('/login');
    }
    return (
        <Layout>
            <div className={classes.welcome}>
                <h1>Hoşgeldiniz</h1>
                <p>An eShop or electronic store is “the place” where a company can sell their products or services 
                    using digital networks. It’s an online store where customers can “visit” from anywhere at anytime 
                    using a Web browser on a mobile phone or a laptop.The number 1 advantage offered by the construction 
                    of an online store (eShop), is the fact that it creates the conditions for a comfortable, fast and 
                    easy shopping process. Customers can browse your store as long as they want, without pressure and 
                    stress from any crowd. From any space and device they want, they can take advantage of the incredibly 
                    convenient conditions offered by an e-shop. However, all these parameters apply only to a 
                    well-designed and fully functional eShop, based on efficient and user-friendly methods, which we will
                    analyze below.
                </p>
            </div>
            <button className={classes.zoom} onClick={buttonClickHandler} >Get Started.</button>
        </Layout>
       
    );
};

export default Welcome;
