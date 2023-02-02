import React, {useState} from "react";
import Button from "./components/Button";

const App = () => {

    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return(
      <div className="App">
          <div>Counter: {count} </div>
          <div>
              <Button text="Increment" onClick={increment}/>
              <Button text="Decrement" onClick={decrement}/>
          </div>
      </div>
    );
};

export default App;