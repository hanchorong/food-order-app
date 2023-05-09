import React, { useContext } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartProvider from "../../store/CartProvider";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartProvider);

  const cartItem = (
    <ul className={classes["cart-item"]}>
      {cartCtx.items.map((item) => {
        <CartItem name={item.name} amount={item.amount} price={item.price} />;
      })}
    </ul>
  );
  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span></span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
