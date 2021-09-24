import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {products} from '../../services/products';
import classes from './Product.module.css';


export class Product extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <!-- Side Bar --> */}
                <div className={classes.sidebar}>
                    <h2 className={classes.heading}>Hey User Hoşgeldiniz</h2>
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
                        {products.map((product)=>
                            <Link className={classes.style} to={`/product/${product.id}`} key={product.id} >
                                <div className={classes.sec}>
                                    <img className={classes.imgsetting} src={product.image} alt='scarf pic'></img>
                                    <p className={classes.paragraph}>{product.name}</p>
                                    <h3>Price {product.price}</h3>
                                    <button type='button'>Add to Cart</button>
                                    

                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </React.Fragment>
        );
    };
};

export default Product;
