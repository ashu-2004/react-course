import TodoName from "./Components/TodoName";
import TodoList from "./Components/TodoList";
import "./App.css";
import TodoContent from "./Components/TodoContent";
import { useState } from "react";
import ErrorMessage from "./Components/ErrorMessage";
import TodoItemsContext from "./store/TodoItemsContext";

function App() {
  const [Items, setItems] = useState([]);

  const addItem = (todo, date) => {
    // let newArr = [...Items, { todo, date }];
    // setItems(newArr);
    setItems((currValue) => [...currValue, { todo, date }]);
  };

  const deleteItem = (todo) => {
    const newItems = Items.filter((item) => item.todo !== todo);
    setItems(newItems);
  };

  return (
    <TodoItemsContext.Provider value={{Items,addItem,deleteItem}}>
      <center>
        <div className="TodoList">
          <TodoName />
          <TodoList />
          <ErrorMessage />
          <TodoContent />
        </div>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
