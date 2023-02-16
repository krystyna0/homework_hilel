import React, {useState, useEffect} from "react";
import Post from "./components/Post/Post";


const App = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = () =>{
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((res) => res.json())
                .then((data) => setUsers(data))
        };
        getUsers()
    }, []);


    return (
        <div className="App">
            <Post users={users}/>
        </div>
    );
};

export default App;