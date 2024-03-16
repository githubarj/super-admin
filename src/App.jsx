import "./App.css";
import Button from "./Components/Button/Button";
import { AiOutlineClose } from "react-icons/ai";
function App() {
  return (
    <div style={{ padding: "20px" }}>
      App
      <Button className=" primary-icon-btn">
        <AiOutlineClose />
      </Button>
      <Button className=" warning  button-medium " variant="left">
        BUTTON
      </Button>
      <Button className=" info button-small" variant="add">
        BUTTON
      </Button>
      <Button className=" error button-large" variant="left">
        BUTTON
      </Button>
      <Button className=" success" variant="right">
        BUTTON
      </Button>
      <Button className=" secondary disabled" variant="add">
        BUTTON
      </Button>
    </div>
  );
}

export default App;
