import style from "./FoodInput.module.css";
function FoodInput({handleKeyDown}) {
   
  return (
    <>
      <input
        className={style.input}
        type="text"
        placeholder="Enter Food Item here"
        onKeyDown={handleKeyDown}
      />
    </>
  );
}

export default FoodInput;
