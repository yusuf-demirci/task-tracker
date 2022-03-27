import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import { v4 as uuid } from "uuid";

function App() {
    const [showTaskBar, setShowTaskBar] = useState(true);
    const [taskList, setTaskList] = useState([
        {
            id: 1,
            task: "Study Pre-class Notes",
            date: new Date().toLocaleDateString("en-US"),
            done: false,
        },
        {
            id: 2,
            task: "Search for job opportunities",
            date: "Everyday!",
            done: false,
        },
    ]);

    const [task, setTask] = useState({
        id: "",
        task: "",
        time: "",
        done: false,
    });

    const [warning, setWarning] = useState("");

    const handleInputChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    const handleShowTaskBar = () => {
        setShowTaskBar(!showTaskBar);
    };

    const handleSaveTask = (data) => {
        if (data.task === "") {
            setWarning("Please enter a task!");
            setTimeout(() => {
                setWarning("");
            }, 3000);
            return;
        }
        setTaskList([
            ...taskList,
            {
                id: uuid(),
                task: data.task,
                date: data.time,
            },
        ]);
        setTask({
            task: "",
            time: "",
        });
    };

    const handleDeleteTask = (id) => {
        setTaskList(taskList.filter((item) => item.id !== id));
    };

    const handleDone = (id) => {
        setTaskList(
            taskList.map((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        done: !task.done,
                    };
                }
                return task;
            })
        );
    };

    return (
        <div className="App">
            <Header show={showTaskBar} func={handleShowTaskBar} />
            {showTaskBar && (
                <AddTask
                    task={task}
                    funcSave={handleSaveTask}
                    funcChange={handleInputChange}
                    warning={warning}
                />
            )}
            <TaskList
                taskList={taskList}
                funcDelete={handleDeleteTask}
                funcDone={handleDone}
            />
        </div>
    );
}

export default App;
