import React, {useState} from "react";
import FormAdd from "./components/Form/FormAdd/FormAdd";
import TaskList from "./components/ TaskList/TaskList";

const App = () => {

    const [tasks, setTasks] = useState([]);


    const addTask = (task) => {
        setTasks(prevState => [...prevState, task])
    };

    const delTask = (id) => {
        setTasks((prevState) => prevState.filter(task => task.id !== id));
    };

    return (
        <div className="App">
            <h1>Todo list</h1>
            <FormAdd addTask={addTask}/>
            <TaskList tasks={tasks} delTask={delTask }/>
        </div>
    );
};

export default App;