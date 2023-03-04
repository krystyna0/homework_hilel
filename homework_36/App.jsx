import React from "react";
import {useReducer} from "react";

const App = () => {

    const initialState = {count: 0}

    const reducer = (state, action) => {
        switch (action.type) {
            case "Increment":
                return {count: state.count +1};
            case  "Decrement":
                return {count: state.count -1};
            case "Reset":
                return {count: state.count = 0};
            default:
                return {count: state.count};
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleIncrement = () => {
        dispatch({type: "Increment"})
    }

    const handleDecrement = () => {
        dispatch({type: "Decrement"})
    }

    const handleResetl = () => {
        dispatch({type: "Reset"})
    }

    return (
        <div className="App">
            <h1>Count {state.count}</h1>
             <button onClick={handleIncrement}>Increment</button>
             <button onClick={handleDecrement}>Decrement</button>
             <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default App;