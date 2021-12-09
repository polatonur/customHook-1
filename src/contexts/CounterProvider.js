import * as React from "react";
import counterReducer from "../reducers/counterReducer";

export const CounterContext = React.createContext({ value: 0 });

const CounterProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(counterReducer, { value: 0 });
  const value = [state, dispatch];
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export default CounterProvider;
