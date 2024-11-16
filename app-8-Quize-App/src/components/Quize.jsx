import React, { useState } from "react";

function Quize({ quize }) {
  const [option, setOption] = useState("");

  const setInputColor = (item) => {
    setOption(item);
    let input = document.querySelectorAll("input");
    input.forEach((input) => {
      input.disabled = true;
    });
  };
  const a = "answer_a_correct";
  const b = "answer_b_correct";
  const c = "answer_c_correct";
  const d = "answer_d_correct";
  return (
    <>
      <div>
        <form>
          <p>{quize.quize}</p>
          <div className="mb-3">
            <input
              type="text"
              className={`form-control ${
                option === a &&
                (quize.answer === a ? "bg-primary" : "bg-danger")
              }`}
              id="option1"
              placeholder={quize.optionA}
              onClick={() => setInputColor(a)}
            />
            {/* {input.style.backgroundCOlor === "bg-primary" && (
              <div class="valid-feedback">Looks good!</div>
            )} */}
          </div>
          <div className="mb-3">
            <input
              type="text"
              onClick={() => setInputColor(b)}
              className={`form-control ${
                option === b &&
                (quize.answer === b ? "bg-primary" : "bg-danger")
              }`}
              id="option2"
              placeholder={quize.optionB}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className={`form-control ${
                option === c &&
                (quize.answer === c ? "bg-primary" : "bg-danger")
              }`}
              onClick={() => setInputColor(c)}
              id="option3"
              placeholder={quize.optionC}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className={`form-control ${
                option === d &&
                (quize.answer === d ? "bg-primary" : "bg-danger")
              }`}
              id="option4"
              onClick={() => setInputColor(d)}
              placeholder={quize.optionD}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Next
          </button>
        </form>
      </div>
    </>
  );
}

export default Quize;
