import React from "react";

function CategoryFilter({ categories, onCategorySelect }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return (
          <button key={category} id={category} onClick={onCategorySelect}>{category}</button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
