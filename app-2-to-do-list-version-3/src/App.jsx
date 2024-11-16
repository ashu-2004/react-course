import TodoName from "./Components/TodoName";
import TodoList from "./Components/TodoList";
import "./App.css";
import TodoContent from "./Components/TodoContent";
import { useState } from "react";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  const [Items, setItems] = useState([]);
  const checkOnClick = (todo, date) => {
    // console.log(newArr);
    let newArr = [...Items, { todo, date }];
    // console.log(newArr)
    setItems(newArr);
  };

  const click = (todo) => {
    // console.log(todo);
    const newItems = Items.filter((item) => item.todo !== todo);
    setItems(newItems);
  };

  return (
    <>
      <center>
        <div className="TodoList">
          <TodoName />
          <TodoList click={checkOnClick} />
          <ErrorMessage items={Items} />
          <TodoContent TodoItems={Items} click={click} />
        </div>
      </center>
    </>
  );
}

export default App;
