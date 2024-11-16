import TodoItem from "./TodoItem";
import style from './TodoContent.module.css';
function TodoContent({TodoItems}) {
  return (
    <>
      <div className={style['items']}>
        {TodoItems.map((item) => (
          <TodoItem key={item.todo} date={item.date} todo={item.todo} />
        ))}
      </div>
    </>
  );
}

export default TodoContent;
