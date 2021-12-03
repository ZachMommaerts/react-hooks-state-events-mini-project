import React from "react";

function NewTaskForm({ categories, onInputTask, onSubmit, text, category }) {
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={text} onChange={onInputTask}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={onInputTask}>
          {categories.map(category => {
            if(category !== 'All') {
              return (
                <option key={category}>{category}</option>
              )
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" onClick={onSubmit}/>
    </form>
  );
}

export default NewTaskForm;
