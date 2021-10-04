import React, {useContext} from 'react';
import CartItem from './CartItem';
import Modal from '../Layout/Modal';
import CartContext from '../../store/cart-context';
import classes from './Cart.module.css';

function Cart(props) {
    const cartCtx = useContext(CartContext);
    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
    };

    const product = (<ul className={classes['cart-items']}>
        {
            cartCtx.items.map((prod) => (
                <li>
                    <CartItem 
                        key={prod.id}
                        name={prod.name}
                        amount={prod.amount}
                        price={prod.price}
                        onRemove={cartItemRemoveHandler.bind(null, prod.id)}
                        onAdd={cartItemAddHandler.bind(null, prod)}
                    />
                </li>
            ))
        }
        </ul>
    )
    return (
        <Modal onClose={props.onClose}>
            {product}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
               <button className={classes['button--alt']} onClick={props.onClose}>Close</button> 
               {hasItems&&<button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;
