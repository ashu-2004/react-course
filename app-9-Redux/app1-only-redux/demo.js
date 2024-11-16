const redux = require("redux"); //In node we can import our dependencies of the packages like this

const INITIAL_VALUE = {
  counter: 0,
};

const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    newStore = { counter: store.counter + action.payload };
  }
  return newStore;
};

const store = redux.createStore(reducer);
//It gives the warning as 'createStore is deprecated' means this version is now becomes older.
//This createStore will takes a reducer function as argument as like useReducer Hook
//It is mostly as like useReducer Hook

const subscriber = () => {
  const state = store.getState(); //There are two types of users one who requires to only wants to look that perticular state for that purpose this function is written
  console.log(state);
};

store.subscribe(subscriber);
//and one who requires each update at each repaint of store.
//This statement mean that, at each time of updation of the store it will give all the updates to that perticular subscriber
store.dispatch({
  type: "INCREMENT",
});

store.dispatch({
  type: "DECREMENT",
});
store.dispatch({
  type: "INCREMENT",
});
store.dispatch({
  type: "ADDITION",
  payload: 7,
});
store.dispatch({
  type: "INCREMENT",
});
