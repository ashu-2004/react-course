import TodoName from "./Components/TodoName";
import TodoList from "./Components/TodoList";
import "./App.css";
import TodoContent from "./Components/TodoContent";
function App() {
  let todoItems = [
    {
      todo: "Buy Milk",
      date: "4/10/2024",
    },
    {
      todo: "Go to College",
      date: "4/10/2024",
    },
    {
      todo: "Eat banana",
      date: "4/10/2024",
    },
  ];
  return (
    <>
      <center>
        <div className="TodoList">
          <TodoName />
          <TodoList />
          <TodoContent TodoItems={todoItems}/>
        </div>
      </center>
    </>
  );
}

export default App;
