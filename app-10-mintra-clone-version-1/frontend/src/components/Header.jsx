import { IoPerson } from "react-icons/io5";
import { BiHappyHeartEyes } from "react-icons/bi";
import { BsHandbagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  const wishlist = useSelector((store) => store.wishlist);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <Link to="#">Men</Link>
          <Link to="#">Women</Link>
          <Link to="#">Kids</Link>
          <Link to="#">Home & Living</Link>
          <Link to="#">Beauty</Link>
          <Link to="#">
            Studio <sup>New</sup>
          </Link>
        </nav>
        <div className="search_bar">
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <IoPerson />
            <span className="action_name">Profile</span>
          </div>
          <Link className="action_container" to="wishlist">
            <BiHappyHeartEyes />
            <span className="action_name">Wishlist</span>
            <span className="bag-item-count">{wishlist.length}</span>
          </Link>
          <Link className="action_container" to="bag">
            <BsHandbagFill />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
          </Link>
    
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776; 
        </button>
      </header>
      {isOpen && (
        <div className="menu-overlay">
          <button className="close-button" onClick={toggleMenu}>
            &times;
          </button>
          <div className="menu-links">
          <Link to="/" onClick={toggleMenu} className="link">
              Home
            </Link>
            <Link to="#" onClick={toggleMenu} className="link">
              Profile
            </Link>
            <Link to="#" onClick={toggleMenu} className="link">
              Wishlist
            </Link>
            <Link to="bag" onClick={toggleMenu} className="link">
              Bag
            </Link>
            <Link to="#" onClick={toggleMenu} className="link">
              Men
            </Link>
            <Link to="#" onClick={toggleMenu} className="link">
              Women
            </Link>
            <Link to="#" onClick={toggleMenu} className="link">
              Kids
            </Link>
            <Link to="#" onClick={toggleMenu} className="link">
              Home & Living
            </Link>
            <Link to="#" onClick={toggleMenu} className="link">
              Beauty
            </Link>
            <Link to="#" onClick={toggleMenu} className="link">
              Studio<sup>New</sup>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
