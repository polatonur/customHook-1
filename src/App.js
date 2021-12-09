import "./styles.css";
import * as React from "react";
import CounterProvider from "./contexts/CounterProvider";
import useCounter from "./hooks/useCounter";

const Counter = () => {
  const { value, increment, decrement } = useCounter();
  console.log(value);

  return (
    <div>
      <button onClick={() => increment()}>+</button>
      <span>{value}</span>
      <button onClick={() => decrement()}>-</button>{" "}
    </div>
  );
};

export default function App() {
  return (
    <CounterProvider>
      <div className="App">
        <h1>Say hi to my Counter</h1>
        <Counter />
      </div>
    </CounterProvider>
  );
}
