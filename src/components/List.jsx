import React from "react";
import Task from "./Task";

export default function List({ tasks, onChecked }) {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <Task task={task} key={index} id={index} onChecked={onChecked} />
        ))}
      </ul>
    </div>
  );
}
