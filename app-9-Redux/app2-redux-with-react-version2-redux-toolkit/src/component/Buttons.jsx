import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store";

function Buttons() {
  const dispatch = useDispatch();
  const ref1 = useRef();

  const incButton = () => {
    dispatch(counterActions.increment());
  };
  const decButton = () => {                          
    dispatch(counterActions.decrement());
  };
  const privacyButton = () => {
    const privacyAction = {
      type: "PRIVACY",
    };
    dispatch(privacyAction);
  };

  const addButton = () => {
    const addition = ref1.current.value;
    const addAction = {
      type: "ADDITION",
      payload: { addition },
    };
    dispatch(addAction);
    ref1.current.value = "";
  };
  const subButton = () => {
    const subtraction = ref1.current.value;
    const subAction = {
      type: "SUBTRACTION",
      payload: { subtraction },
    };
    dispatch(subAction);
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
