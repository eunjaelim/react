import Alert from "./components/Alert";
import Btn from "./components/Btn";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Btn
        color="secondary"
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        My Button
      </Btn>
    </div>
  );
}

export default App;
