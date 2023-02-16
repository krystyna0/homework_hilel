import React from "react";


const Task = (props) => {
    const {task, delTask} = props;

    return(
        <div className='task'>
            <h3>{task.name}</h3>
            <button onClick={() => delTask(task.id)}>delete</button>
        </div>
    )
}
 export default Task;