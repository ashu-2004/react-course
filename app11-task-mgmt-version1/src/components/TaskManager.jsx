import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskAction } from "../store";
const TaskManager = () => {
  let time=new Date();
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const dispatch = useDispatch();

  let titleValue = useSelector((store) => store.task.title);
  const descriptionValue = useSelector((store) => store.task.description);
  const dateValue = useSelector((store) => store.task.item.date);
 
  const handelOntitleChange = () => {
    const titleText = title.current.value;
    dispatch(taskAction.addTitle(titleText));
  };
  const handelOnDescChange = () => {
    const descText = description.current.value;
    dispatch(taskAction.addDesc(descText));
  };

  const handelOnDateChange = () => {
    const dateChange = date.current.value;
    const currentTime=time.toLocaleTimeString();
    const currentDate=time.toLocaleDateString();
    dispatch(taskAction.addDate({dateChange,currentTime,currentDate}));
  };
 
  return (
    <>
      <div
        className="modal-sheet d-block p-4 py-md-5 main-div"
        role="dialog"
        id="modalSheet"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <center>
              <h1 className="fw-bold heading">TASK MANAGER</h1>
            </center>
            <div className="input-text">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                ref={title}
                value={titleValue}
                onChange={handelOntitleChange}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Discription"
                ref={description}
                value={descriptionValue}
                onChange={handelOnDescChange}
              />
              <h6 className="fw-bold">Deadline</h6>
              <input
                type="date"
                className="form-control"
                ref={date}
                value={dateValue}
                onChange={handelOnDateChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TaskManager;
