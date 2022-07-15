import Card from "../UI/Card";
import Classes from "./AvailableMeals.module.css";
import MealItem from "./MealItems/MEalItem";

const DUMMY_MEALS = [
  {
    id: 1,
    name: "sushi",
    Description: "",
    Price: 45,
  },
  {
    id: 2,
    name: "schnitZel",
    Description: "Finest fish and vegan",
    Price: 12,
  },
  {
    id: 3,
    name: "Barbeque Burger",
    Description: "A german Specilist",
    Price: 50,
  },
  {
    id: 4,
    name: "Green Bowl",
    Description: "Health and for gym person",
    Price: 20,
  },
  {
    id: 5,
    name: "Sweets",
    Description: "Delicious sweets ",
    Price: 30,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((val) => {
    return (
      <MealItem
        // key={val.id}
        id={val.id}
        name={val.name}
        description={val.Description}
        Price={val.Price}
      />
    );
  });
  return (
    <section className={Classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
