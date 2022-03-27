import Button from "../Button/Button";
import "./AddTask.css";

const AddTask = ({ task, funcSave, funcChange, warning }) => {
    return (
        <form className="task-form">
            <div className="input-box">
                <label htmlFor="task">Task*</label>
                <input
                    type="text"
                    id="task"
                    name="task"
                    placeholder="Add Task"
                    value={task.task}
                    onChange={funcChange}
                />
                <span className="warning">{warning}</span>
            </div>
            <div className="input-box">
                <label htmlFor="time">Day & Time</label>
                <input
                    type="text"
                    id="time"
                    name="time"
                    placeholder="Add Day & Time"
                    value={task.time}
                    onChange={funcChange}
                />
            </div>
            <Button func={funcSave} task={task} />
        </form>
    );
};

export default AddTask;
