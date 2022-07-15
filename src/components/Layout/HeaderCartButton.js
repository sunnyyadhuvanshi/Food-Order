import React from "react";
import CartIcon from "../Cart/CartIcon";
import Classes from "./HeaderButton.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={Classes.button} onClick={props.onClick}>
      <span className={Classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderButton;
