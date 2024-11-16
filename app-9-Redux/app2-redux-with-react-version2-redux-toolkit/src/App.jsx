import { useSelector } from "react-redux";
import "./App.css";
import Buttons from "./component/Buttons";
import Container from "./component/Container";
import Content from "./component/Content";
import PrivacyMessage from "./component/PrivacyMessage";

function App() {
  const privacy_val = useSelector((store) => store.privacy_val);
  return (
    <center className="content">
      <Container>
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold text-body-emphasis">Counter</h1>
          <div className="col-lg-6 mx-auto">
            {privacy_val ? (
              <PrivacyMessage></PrivacyMessage>
            ) : (
              <Content></Content>
            )}
            <Buttons></Buttons>
          </div>
        </div>
      </Container>
    </center>
  );
}

export default App;
