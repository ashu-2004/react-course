import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy_val: false,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type == "INCREMENT") {
    newStore = { ...store, counter: store.counter + 1 };
  } else if (action.type == "DECREMENT") {
    newStore = {
      ...store,
      counter: store.counter - 1,
    };
  } else if (action.type == "ADDITION") {
    newStore = {
      ...store,
      counter: store.counter + Number(action.payload.addition),
    };
  } else if (action.type == "SUBTRACTION") {
    newStore = {
      ...store,
      counter: store.counter - Number(action.payload.subtraction),
    };
  } else if (action.type == "PRIVACY") {
    return {
      ...store,
      privacy_val: !store.privacy_val,
    };
  }
  return newStore;
};

const counterStore = createStore(counterReducer);

export default counterStore;
