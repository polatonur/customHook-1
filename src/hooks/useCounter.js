import * as React from "react";
import { CounterContext } from "../contexts/CounterProvider";

const useCounter = () => {
  const context = React.useContext(CounterContext);
  if (!context) {
    throw new Error(
      "no contextyou should use this hook inside a context provider. Check your provider"
    );
  }
  const [{ value }, dispatch] = context;
  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });

  return { value, increment, decrement };
};

export default useCounter;
