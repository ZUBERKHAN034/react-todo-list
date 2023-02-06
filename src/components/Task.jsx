import React from "react";

export default function Task({ task, id, onChecked }) {
  return (
    <div onClick={() => onChecked(id)}>
      <li>{task}</li>
    </div>
  );
}
