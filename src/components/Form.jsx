import React, { useState } from "react";
import List from "./List";

export default function Form() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const addedTasks = [...tasks, task];
    setTasks(addedTasks);
    setTask("");
  };

  const removeTask = (id) => {
    const removedTasks = tasks.filter((_, index) => id !== index);
    setTasks([...removedTasks]);
  };
  return (
    <div className="form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>
        <span>Add</span>
      </button>
      <List tasks={tasks} onChecked={removeTask} />
    </div>
  );
}
