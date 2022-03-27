import "./Task.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Task = ({ title, time, id, done, funcDelete, funcDone }) => {
    return (
        <div className="task">
            <div className={`task-content ${done && "done"}`}>
                <h3 className="task-title" onClick={() => funcDone(id)}>
                    {title}
                </h3>
                <p onClick={() => funcDone(id)}>{time}</p>
                <FontAwesomeIcon
                    className="x-mark"
                    icon={faX}
                    onClick={() => funcDelete(id)}
                />
            </div>
        </div>
    );
};

export default Task;
