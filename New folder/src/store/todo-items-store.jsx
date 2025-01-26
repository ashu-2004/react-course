import { createContext, useCallback } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  Items: [],
  addItem: () => {},
  deleteItem: () => {},
});

//pure reducer function
let todoReducer = (currentState, action) => {
  let newItemState;
  if (action.type === "NEW_ITEM") {
    newItemState = [
      ...currentState,
      { todo: action.payload.todo, date: action.payload.date },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newItemState = currentState.filter(
      (item) => item.todo !== action.payload.todo
    );
  } else {
    newItemState = currentState;
  }
  return newItemState;
};

export const TodoItemsContextProvider = ({ children }) => {
  const [Items, dispatchItem] = useReducer(todoReducer, []);

  const addItem = useCallback((todo, date) => {
    dispatchItem({
      type: "NEW_ITEM",
      payload: {
        todo,
        date,
      },
    });
  },[dispatchItem]);

  const deleteItem = (todo) => {
    const newDeleteAction = {
      type: "DELETE_ITEM",
      payload: {
        todo,
      },
    };
    dispatchItem(newDeleteAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        Items,
        addItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
