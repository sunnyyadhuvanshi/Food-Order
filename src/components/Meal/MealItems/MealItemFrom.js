import Input from "../../UI/Input";
import Classes from "./MealIemsForm.module.css";
import { useRef, useState } from "react";
const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, SetAmountIsValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().lenght === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      SetAmountIsValid(false);
      return;
    }
    props.onAddCart(enteredAmountNumber);
  };
  return (
    <form className={Classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ ADD</button>
      {!amountIsValid && <p>enter valid amount(1-5)</p>}
    </form>
  );
};
export default MealItemForm;
