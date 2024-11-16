import { useState } from "react";
import "./App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import PostListContextProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedItem, setSelectedItem] = useState("Home");

  const handleOnClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <PostListContextProvider>
      <div className="container1">
        <Sidebar selectedItem={selectedItem} handleOnClick={handleOnClick} />
        <div className="content">
          <Header />
          <Outlet></Outlet>
          <Footer />
        </div>
      </div>
    </PostListContextProvider>
  );
}

export default App;
