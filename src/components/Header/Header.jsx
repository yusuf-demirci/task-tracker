import Button from "../Button/Button";
import "./Header.css";

const Header = ({ show, func }) => {
    return (
        <header>
            <h1 className="title">Task Tracker</h1>
            <Button
                name={(show ? "Close" : "Show") + " Add Task Bar"}
                bgColor={show ? "#FE0000" : "#95007F"}
                func={func}
            />
        </header>
    );
};

export default Header;
