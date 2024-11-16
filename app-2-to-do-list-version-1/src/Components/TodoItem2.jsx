function TodoItem2() {
  let todo = "Go to College";
  let date = "4/10/2024";
  return (
    <>
      <div className="container">
        <div className="row row1">
          <div className="col-6">{todo}</div>
          <div className="col-4">{date}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Danger
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem2;
