import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';


const FormAdd = (props) => {
    const {addTask} = props;
    const [taskName, setTaskName] = useState([])

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const task = {
            name: taskName,
            id: uuidv4(),
        }

        addTask(task);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type={"text"}
                placeholder={"task name"}
                value={taskName}
                onChange={(event) => setTaskName(event.target.value)}
                required
                autoFocus
            />
            <button type={"submit"}>Add</button>
        </form>
    )
}

export default FormAdd
