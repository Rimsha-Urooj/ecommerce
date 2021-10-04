import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {products} from '../../services/products';
import AuthContext from '../../store/AuthContext';

import classes from './Product.module.css';
import Cart from '../Cart/Cart';
import Layout from '../Layout/Layout';
import ProductItem from './ProductItem';



export class Product extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            cartShown: false,
        }
    }

    showCartHandler = () => {
        this.setState({cartShown: true});
    }

    hideCartHandler = () =>{
        this.setState({cartShown: false});
    }

    render() {
        const {username, isAuthenticated} = this.context;
       
        return (
            <Layout onShowCart={this.showCartHandler.bind(this)}>
                {/* <!-- Side Bar --> */}
                {(isAuthenticated && this.state.cartShown) && 
                    <Cart
                        onClose = {this.hideCartHandler.bind(this)}
                    />
                }
                <div className={classes.sidebar}>
                    <h2 className={classes.heading}>Hey {username}</h2>
                    <Link className={classes.link} path="/">Featured</Link>
                    <Link className={classes.link} path="/">Discounts</Link>
                    <Link className={classes.link} path="/"> Sale</Link>
                    <Link className={classes.link} path="/"> Top Reviewd</Link>
                    <Link className={classes.link} path="/">View Profile</Link>
                </div>
                {/* <!-- Main Content --> */}
                <div className={classes.main1}>
                    <div className={classes.title}><h2>Handy Craft </h2></div>
                    
                    <div className={classes['flex-container']}>
                        {products.map((product)=>(
                            <ProductItem 
                                id={product.id}
                                key={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                            />
                        ))}
                    </div>
    
                </div>
            </Layout>
        );
    };
};
Product.contextType=AuthContext;

export default Product;
