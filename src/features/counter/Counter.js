import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addToCount } from "../counter/counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);
  const [addedNumber, setAddedNumber] = useState(0);

  console.log(addedNumber);
  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };
  const addNumberHandler = (event) => {
    event.preventDefault();

    dispatch(addToCount(addedNumber));
  };
  return (
    <div>
      <button onClick={incrementHandler}>+</button>
      {counter}
      <form onSubmit={addNumberHandler}>
        <input
          type="number"
          value={addedNumber}
          onChange={(e) => setAddedNumber(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <button onClick={decrementHandler}>-</button>
    </div>
  );
}

export default Counter;
