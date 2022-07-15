import { Fragment } from "react";
import AvailableMeals from "./AvailableMeal";
import MealSummer from "./MealSummer";

const Meal = () => {
  return (
    <Fragment>
      <MealSummer />
      <AvailableMeals />
    </Fragment>
  );
};
export default Meal;
