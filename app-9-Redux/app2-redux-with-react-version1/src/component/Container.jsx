function Container({ children }) {
  return (
    <>
      <div className="">
        <div className="card-body">{children}</div>
      </div>
    </>
  );
}

export default Container;
