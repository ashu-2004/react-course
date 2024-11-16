import { useRef } from "react";
import { useDispatch } from "react-redux";
import { action1 } from "../store/counter";
import { actions } from "../store/privacy";

function Buttons() {
  const dispatch = useDispatch();
  const ref1 = useRef();

  const incButton = () => {
    dispatch(action1.increament());
  };
  const decButton = () => {
    dispatch(action1.decrement());
  };
  const privacyButton = () => {
    dispatch(actions.privacyCheck());
  };

  const addButton = () => {
    dispatch(action1.addition(ref1.current.value)); //argument passed as a payload
    ref1.current.value = "";
  };

  const subButton = () => {
    dispatch(action1.subtraction(ref1.current.value));
    ref1.current.value = "";
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button onClick={incButton} type="button" className="btn btn-primary">
          +1
        </button>
        <button type="button" onClick={decButton} className="btn btn-success">
          -1
        </button>
        <button
          type="button"
          onClick={privacyButton}
          className="btn btn-warning"
        >
          Privacy
        </button>
      </div>
      <div className="content-assemble">
        <div className="mb-3">
          <input
            type="text"
            className="form-control w-content"
            id="text"
            ref={ref1}
            placeholder="Enter Number"
          />
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button onClick={addButton} type="button" className="btn btn-info">
            Add
          </button>

          <button type="button" onClick={subButton} className="btn btn-danger">
            Subtract
          </button>
        </div>
      </div>
    </>
  );
}

export default Buttons;
