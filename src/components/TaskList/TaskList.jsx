import { useState } from "react";
import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = ({ taskList, funcDelete, funcDone }) => {
    return (
        <>
            {taskList.length ? (
                <div className="task-list">
                    {taskList.map((task) => (
                        <Task
                            key={task.id}
                            id={task.id}
                            title={task.task}
                            time={task.date}
                            done={task.done}
                            funcDelete={funcDelete}
                            funcDone={funcDone}
                        />
                    ))}
                </div>
            ) : (
                <p>No Tasks to Show</p>
            )}
        </>
    );
};

export default TaskList;
