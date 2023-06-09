import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import "./homescreen.css";
import CardList from "../../card/cardlist/CardList";
import Button from "../../compon/button/Button";

export default function HomeScreen() {
  const [tasks, setTasks] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newTaskInput, setNewTaskInput] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleAddTask = () => {
    setShowPopup(true);
  };

  const handlePopupInputChange = (event) => {
    setNewTaskInput(event.target.value);
  };

  const handleSaveTask = () => {
    const newTask = {
      task: newTaskInput,
      priority: selectedOption,
    };
    setTasks([...tasks, newTask]);
    setShowPopup(false);
    setNewTaskInput("");
    setSelectedOption("");
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="container">
      <div className="navbarContainer">
        <div className="accountContainer">
          <FaUserAlt onClick={() => alert("account clicked")} />
        </div>
      </div>
      <div className="bodyContainer">
        <CardList />
        <h1>HomeScreen</h1>
        <Button text="Add new task" onClick={handleAddTask} />
      </div>

      {showPopup && (
        <div className="popupOverlay">
          <div className="popupContainer">
            <div className="popup">
              <input
                type="text"
                value={newTaskInput}
                onChange={handlePopupInputChange}
                placeholder="Enter task"
              />
              <p>Please select priority</p>
              <select value={selectedOption} onChange={handleDropdownChange}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <Button text="Save" onClick={handleSaveTask} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
