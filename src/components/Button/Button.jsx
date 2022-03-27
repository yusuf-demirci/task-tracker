import "./Button.css";

const Button = ({ name, bgColor, func, task }) => {
    return (
        <button
            type="button"
            className="task-bar-button"
            style={{ backgroundColor: bgColor }}
            onClick={() => func(task)}
        >
            {name || "Save Task"}
        </button>
    );
};

export default Button;
