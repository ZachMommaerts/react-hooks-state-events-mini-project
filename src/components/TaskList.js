import React, {useState} from "react";
import Task from './Task';

function TaskList({tasks, selectedCategory, handleDelete }) {

  const filteredTasks = tasks.filter(task => task.category === selectedCategory || selectedCategory === 'All');
  return (
    <div className="tasks">
      {filteredTasks.map(task => {
        return (
          <Task
            handleDelete={handleDelete}
            key={task.text}
            category={task.category}
            name={task.text}
          />
        )
      })}
    </div>
  );
}

export default TaskList;
