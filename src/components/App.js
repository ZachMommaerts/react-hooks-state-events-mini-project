import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [ selectedCategory, setSelectedCategory] = useState('All');
  const [ newTasks, setNewTasks] = useState(TASKS)
  const [ addTask, setAddTask] = useState({
    text: '',
    category: 'Code'
  });

  function handleDelete(e) {
    const tasksToDisplay = newTasks.filter(task => task.text !== e.target.id);
    setNewTasks(tasksToDisplay);
  }

  function onCategorySelect(e) {
    e.target.className = 'selected';
    setSelectedCategory(e.target.id)
  }

  function onInputTask(e) {
    setAddTask({
      ...addTask,
      [e.target.name]: e.target.value
    })
  }

  function onSubmit(e) {
    e.preventDefault();
    const newTaskList = [...newTasks, addTask];
    setNewTasks(newTaskList);
    console.log(addTask);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategorySelect={onCategorySelect}/>
      <NewTaskForm categories={CATEGORIES}  onInputTask={onInputTask} text={addTask.text} category={addTask.category} onSubmit={onSubmit}/>
      <TaskList tasks={newTasks} handleDelete={handleDelete} selectedCategory={selectedCategory} addTask={addTask}/>
    </div>
  );
}

export default App;
