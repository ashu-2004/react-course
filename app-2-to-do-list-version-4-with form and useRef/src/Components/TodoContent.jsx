import TodoItem from "./TodoItem";
import style from "./TodoContent.module.css";
function TodoContent({ TodoItems ,click}) {
  
  return (
    <>
      <div className={style["items"]}>
        {TodoItems.map((item) => (
          <TodoItem
            key={item.todo}
            date={item.date}
            todo={item.todo}
            click={click}
          />
        ))}
      </div>
    </>
  );
}

export default TodoContent;
