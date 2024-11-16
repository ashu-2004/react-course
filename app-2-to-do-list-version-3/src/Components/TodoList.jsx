import style from "./TodoList.module.css";
import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
function TodoList({ click }) {
  
  const [todo, setTodo] = useState('');
  const [date, setDate] = useState('');

  const handleOntodoChange = (event) => {
    setTodo(event.target.value);
    // console.log(event.target.value)
  };

  const handleOndateChange = (event) => {
    setDate(event.target.value);
    // console.log(event.target.value)
  };

  const onClickEvent = (event) => {
    click(todo, date);
    setDate("");
    setTodo("");
  };

  return (
    <>
      <div className="container">
        <div className="row row1">
          <div className="col-6">
            <input
              type="text"
              value={todo}
              placeholder="Enter Todo here"
              onChange={(event) => handleOntodoChange(event)}
            />
          </div>

          <div className="col-4">
            <input
              type="date"
              value={date}
              onChange={(event) => handleOndateChange(event)}
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              className={`${style.btn2} btn btn-success`}
              onClick={(event) => onClickEvent(event)}
            >
            <IoMdAddCircleOutline />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
