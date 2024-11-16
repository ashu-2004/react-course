import React from "react";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";
function bag() {
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const bagItems = items.filter((item) => bag.includes(item.id));

  return (
    <div>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {bagItems.map((item) => (
              <BagItem item={item} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </div>
  );
}

export default bag;
