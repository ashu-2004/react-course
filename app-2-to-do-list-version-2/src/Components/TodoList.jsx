function TodoList() {
  return (
    <>
      <div className="container">
        <div className="row row1">
          <div className="col-6"><input type="text" placeholder="Enter Todo here" /></div>
          <div className="col-4"><input type="date" placeholder="dd/mm/yy"/></div>
          <div className="col-2"><button type="button" className="btn btn-success">Success</button></div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
