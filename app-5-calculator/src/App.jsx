import "./App.css";
import Input from "./components/Input.jsx";
import ButtonsContent from "./components/ButtonsContent.jsx";
import { useState } from "react";

function App() {
  const [text, setText] = useState([]);

  const btnClick = (event, item) => {
    // console.log(event.target.innerText);
    // console.log(event);
    // console.log(item)
    if (item == "C") {
      item = "";
      setText(item);
    }
    else if(item == "="){
      const result=eval(text);
      setText(result);
    }
    else {
      let newArr = text + item;
      setText(newArr);
    }
  };

  return (
    <>
      <div>
        <center>
          <div className="calculator">
            <h1 className="App-Name">CALCULATOR</h1>
            <Input text={text} />
            <div className="game">
              <ButtonsContent btnClick={btnClick} />
            </div>
          </div>
        </center>
      </div>
    </>
  );
}

export default App;
