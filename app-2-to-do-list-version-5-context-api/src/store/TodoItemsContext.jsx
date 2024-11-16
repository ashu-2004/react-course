import { createContext } from "react";

const TodoItemsContext = createContext({
  Items: [],
  addItem: () => {},
  deleteItem: () => {},
});

export default TodoItemsContext;
