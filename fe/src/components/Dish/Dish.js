import React from 'react';

const Dish = ({ name, course, ingredients, technique }) => {
  return (
    <div className="dish">
      <h2>{name}</h2>
      <h3>{course}</h3>
      {ingredients.map((ingredient) => {
        return (
          <p key={`${name}-${ingredient}`}>{ingredient}</p>
        );
      })}
      <p>{technique}</p>
    </div>
  );
}

export default Dish;
