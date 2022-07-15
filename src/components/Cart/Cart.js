import Modal from "../UI/Modal";
import Classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const totalamount = cartctx.totalAmount;
  // console.log(totalamount);
  const hasItems = cartctx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartctx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartctx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={Classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal hideData={props.onHideCart}>
      {cartItems}
      <div className={Classes.total}>
        <span>Total Amount</span>
        <span>{`$${+totalamount}`}</span>
      </div>
      <div className={Classes.actions}>
        <button className={Classes["butto--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={Classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
