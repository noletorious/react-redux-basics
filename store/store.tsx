import { createStore } from "redux";

const PlusMinusReducer = (
  state = {
    counter: 100,
  },
  action: { type: String }
) => {
  if (action.type === "INCREMENT") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DECREMENT") {
    return { counter: state.counter - 1 };
  }
  return state;
};

const store = createStore(PlusMinusReducer);

export default store;
