import Items from "./Items";
import style from "./AppContent.module.css";
import { useState } from "react";
function AppContent({items }) {
  const [foodItem, setfoodItem] = useState([]);

  const checkOnClick = (item) => {
    let newArr = [...foodItem, item]; //Array Distracting
    setfoodItem(newArr);
  };

  return (
    <>
      <ul className={`${style.list} list-group`}>
        {items.map((item) => (
          <Items
            key={item}
            fooditem={item}
            active={foodItem.includes(item)}
            checkOnClick={() => checkOnClick(item)}
          />
        ))}
      </ul>
    </>
  );
}

export default AppContent;
