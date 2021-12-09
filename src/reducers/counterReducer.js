const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };
    default:
      throw new Error(`No action like ${action.type}`);
  }
};

export default counterReducer;
