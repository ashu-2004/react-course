import style from "./TodoList.module.css";
import { useRef } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
function TodoList({ click }) {
  const todo = useRef();
  const date = useRef();

  const onClickEvent = (event) => {
    event.preventDefault();
    let todo1 = todo.current.value;
    let date1 = date.current.value;
    click(todo1, date1);
    todo.current.value = "";
    date.current.value = "";
  };

  return (
    <>
      <div className="container">
        <form className="row row1" onSubmit={onClickEvent}>
          <div className="col-6">
            <input type="text" ref={todo} placeholder="Enter Todo here" />
          </div>

          <div className="col-4">
            <input type="date" ref={date} />
          </div>
          <div className="col-2">
            <button type="submit" className={`${style.btn2} btn btn-success`}>
              <IoMdAddCircleOutline />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default TodoList;
