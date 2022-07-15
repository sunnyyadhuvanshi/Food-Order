import { useContext } from "react";
import Classes from "./MealItem.module.css";
import MealItemForm from "./MealItemFrom";
import CartContext from "../../../store/cart-context";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  // const price = `$${props.Price.toFixed(2)}`;
  const addToCartHandle = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: +amount,
      price: +props.Price,
    });
  };
  return (
    <li className={Classes.meal}>
      <div>
        <h3>{props.name}</h3>

        <div className={Classes.description}>{props.description}</div>
        <div>{props.Price}</div>
      </div>
      <div>
        <MealItemForm onAddCart={addToCartHandle} />
      </div>
    </li>
  );
};
export default MealItem;
