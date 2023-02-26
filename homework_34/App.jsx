import {createContext, useState} from "react";
import Wiget from "./components/Wiget";


export const Context = createContext(null)

const App = () => {

    const [user, setUser] = useState({name: "Username"});

    return (
        <div className="App">
            <Context.Provider value={user}>
                <Wiget user={user}/>
            </Context.Provider>
        </div>
    );
};

export default App;