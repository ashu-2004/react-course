import ClockName from "./Components/ClockName";
import ClockContent from "./Components/ClockContent";
import "./App.css";
import Container from "./Components/Container";

function App() {
  return (
    <>
      <Container>
        <center>
          <ClockName />
          <ClockContent />
        </center>
      </Container>
    </>
  );
}

export default App;
