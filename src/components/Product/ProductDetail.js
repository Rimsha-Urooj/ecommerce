import React from 'react';
import { useParams } from 'react-router-dom';
import {products} from '../../services/products';
import Layout from '../Layout/Layout';
import classes from './ProductDetail.module.css';

function ProductDetail() {
    const params = useParams();
    const product = products.find((product) => product.id === params.productId);

    // if(!product){
    //     return <p>No Product Found</p>
    // }

    return (
        <Layout>
            <div className={classes.details}>
                <h2 className={classes.head}>Product Detail Page</h2>
                <div>
                    <div className={`${classes.leftdiv} + ${classes.imgzoom}`}>
                        <img className={classes.imgsetting} src={product.image} alt='scarf pic'></img>
                    </div>
                    <div className={classes.rightdiv}>
                        <p>{product.name}</p>
                        <h1 className={classes.title}>Colored Shawl</h1>
                        <p>Code: {product.code}</p>
                        <h3 style={{color:'blue'}}>Price: {product.price}</h3>
                        <p>{product.description}</p>
                        <div className={classes.pieces}>
                            <p>Hurry Up Only {product.quantity} pieces left</p>
                        </div>
                        <h2>Size: {product.size}</h2>
                        <p style={{color: 'green'}}>In-Stock: {product.inStock}</p>
                        <h2 style={{color:'red'}}>Sale: {product.sale}</h2>
                        <div className={classes.pieces} style={{backgroundColor:'green'}}>
                            <p>Discount: {product.discount}</p>
                        </div>
                        <button className={classes.button} type='button'>Buy Now</button>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default ProductDetail;

