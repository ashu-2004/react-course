import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
import PostListContextProvider from "./store/post-list-store";

function App() {
  const [selectedItem, setSelectedItem] = useState("Home");

  const handleOnClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <PostListContextProvider>
      <div className="container1">
        <Sidebar selectedItem={selectedItem} handleOnClick={handleOnClick}/>
        <div className="content">
          <Header />
          {selectedItem === "Home" ? (
            <CreatePost></CreatePost>
          ) : (
            <PostList></PostList>
          )}

          <Footer />
        </div>
      </div>
    </PostListContextProvider>
  );
}

export default App;
