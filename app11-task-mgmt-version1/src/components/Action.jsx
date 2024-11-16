import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction, taskAction } from "../store";

function Action() {
  let title = useSelector((store) => store.task.title);
  const description = useSelector((store) => store.task.description);
  const { date, time, currDate } = useSelector((store) => store.task.item);
  const dispatch = useDispatch();
  let randomId = () => `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  const handleAddAction = () => {
    const items = [
      {
        id: randomId(),
        title: title,
        description: description,
        date: date,
        time: time,
        currDate: currDate,
      },
    ];
    dispatch(addAction.addTask(items));
    dispatch(taskAction.resetData());
  };
  return (
    <div>
      <div>
        <div className="mb-5 action-btn">
          <button
            className="btn btn-primary btn-lg px-4"
            onClick={handleAddAction}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default Action;
