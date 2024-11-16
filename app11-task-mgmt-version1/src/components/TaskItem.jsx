import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAction } from "../store";

function TaskItem({ items }) {
  const [complete, setComplete] = useState(false);
  const dispatch = useDispatch();
  const handleCompleted = (complete) => {
    complete = true;
    setComplete(complete);
  };

  const handleDelete = () => {
    dispatch(addAction.deleteTask(items.id));
  };
  return (
    <div>
      <div className="card mb-4 rounded-3 modal-content input-text rounded-4 shadow">
        <div className="card-header py-3">
          <h4
            className={`my-0 fw-normal text fw-bold ${
              complete ? "text-line" : null
            }`}
          >
            {items.title}
          </h4>
        </div>
        <div className="card-body task-bdy">
          <ul className="list-unstyled mt-3 mb-4">
            <li>{items.description}</li>
            <li>
              <b>Status:</b> {complete ? <p>Completed</p> : <p>Pending</p>}
            </li>
            <li>
              <b>Deadline:</b> {items.date}
            </li>
            <li>
              <b>Created:</b> {items.currDate}, {items.time}
            </li>
          </ul>
          <div className="mng-btn">
            <button
              type="button"
              onClick={() => handleCompleted(complete)}
              className="btn btn-success"
            >
              Complete
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
