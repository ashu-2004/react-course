import AppName from "./Components/AppName.jsx";
import AppContent from "./Components/AppContents.jsx";
import "./App.css";
import ErrorMessage from "./Components/ErrorMessage.jsx";
import Container from "./Components/Container.jsx";
import FoodInput from "./Components/FoodInput.jsx";
import { useState } from "react";

function App() {
  // let textOnChange="Food Item Entered by User";

  // let [textOnChange,settextOnChange]=useState("Food Item Entered by User");

  const [foodItem, setfoodItem] = useState([]);

  const keyDown = (event) => {
    // console.log(event.target.value);
    // console.log(event.key);
    // settextOnChange(event.target.value);
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newArr = [...foodItem, newFoodItem]; //Array Distracting
      setfoodItem(newArr);
      event.target.value = "";
    }
  };

  return (
    <>
      <Container>
        <center>
          <AppName></AppName>
        </center>
        <FoodInput handleKeyDown={keyDown} />
        {/* <p className="Food-Item">{textOnChange}</p> */}
        <ErrorMessage items={foodItem}></ErrorMessage>
        <AppContent items={foodItem}></AppContent>
      </Container>
    </>
  );
}

export default App;
