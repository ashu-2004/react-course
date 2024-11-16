import React from "react";
import { useSelector } from "react-redux";
import WishlistItem from "../components/wishlistItem";
function Wishlist() {
  const wishlist = useSelector((store) => store.wishlist);
  const items = useSelector((store) => store.items);
  const wishlistItem = items.filter((item) => wishlist.includes(item.id));

  return (
    <div>
      <main>
        <div className="bag-page">
          <div className="wishlist-items-container">
            {wishlistItem.map((item) => (
              <WishlistItem item={item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Wishlist;
