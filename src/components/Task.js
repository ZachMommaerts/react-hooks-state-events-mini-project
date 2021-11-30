import React from "react";

function Task({ key, category, name, handleDelete}) {
  return (
    <div className="task" key={key}>
      <div className="label">{category}</div>
      <div className="text">{name}</div>
      <button className="delete" id={name} onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
