import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function Task() {
  const items = useSelector((store) => store.add);
  return (
    <div>
      <div className="card-container">
        {items.map((item) => (
          <TaskItem items={item} key={item.id}></TaskItem>
        ))}
      </div>
    </div>
  );
}

export default Task;
