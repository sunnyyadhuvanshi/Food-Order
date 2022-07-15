import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import { useState } from "react";
import Meal from "./components/Meal/Meal";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/cart-provider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandle = () => {
    setCartIsShown(true);
  };

  const hideCartHandle = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandle} />}
      <Header onShowCart={showCartHandle} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;
