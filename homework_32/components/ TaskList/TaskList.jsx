import React from "react";
import Task from "../Task/Task";

const TaskList = (props) => {
    const {tasks, delTask} = props;

    return(
        <div>
            {tasks.map(task => (
                <Task key={task.id} task={task} delTask={delTask}/>
            ))}
        </div>
    )
}

export default TaskList;