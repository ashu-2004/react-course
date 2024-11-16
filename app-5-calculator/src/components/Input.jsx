const Input = ({ text}) => {

  return (
    <>
      <div className="input-group-lg">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          placeholder={text}
        readOnly/>
      </div>
    </>
  );
};

export default Input;
