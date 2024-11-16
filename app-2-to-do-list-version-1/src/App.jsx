import TodoName from "./Components/TodoName";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import TodoList from "./Components/TodoList";
import "./App.css";
function App() {
  return (
    <>
      <center>
        <div className="TodoList">
          <TodoName />
          <TodoList />
          <div className="items">
            <TodoItem1 />
            <TodoItem2 />
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
