import React, { Fragment } from "react";
import mealimg from "../../assets/meals.jpg";
import Classes from "./Header.module.css";
import HeaderButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={Classes.header}>
        <h1>React Meal</h1>
        <HeaderButton onClick={props.onShowCart} />
      </header>
      <div className={Classes["main-image"]}>
        <img src={mealimg} alt="food image"></img>
      </div>
    </Fragment>
  );
};

export default Header;
