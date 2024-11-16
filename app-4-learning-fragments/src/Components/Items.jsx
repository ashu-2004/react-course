import style from "./Items.module.css";
function Items({ fooditem,active,checkOnClick }) {
  return (
    <>
      <li className={`${style.kgitem1} list-group-item ${active==true ? "active" : null}`}>
        <span className={style["kg-item2"]}>{fooditem}</span>
        <button
          type="button"
          className={`${style.button} btn btn-info`}
          onClick={checkOnClick}
        >
          Buy
        </button>
      </li>
    </>
  );
}

export default Items;
