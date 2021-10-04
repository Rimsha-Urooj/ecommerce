import React, {useContext} from 'react';
import CartContext from '../../store/cart-context';
import ProductForm from './ProductForm';
import { Link } from 'react-router-dom';
import classes from './Product.module.css';

function ProductItem(props) {
    const cartCtx = useContext(CartContext);
    const pr = +props.price;

    const price = `${pr.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        }); 
        
        
    };
    return (
        
        <div className={classes.sec}>
            <Link className={classes.style} to={`/product/${props.id}`} key={props.id} id={props.id} >
                
                <img className={classes.imgsetting} src={props.image} alt='scarf pic'></img>
                <p className={classes.paragraph}>{props.name}</p>
                <h3>Price ${price}</h3>
            </Link>
            <ProductForm onAddToCart = {addToCartHandler} />
        </div>
        
    )
}

export default ProductItem
