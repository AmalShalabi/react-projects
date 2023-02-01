import React from "react";
import style from "./meal.module.css";

const MealItem = (getMeals) => {
  console.log(getMeals.data);
  return (
    <>
      <div className={style.card}>
        <img src={getMeals.data.strMealThumb} alt="meal" />
        <div className={style.info}>
          <h2>{getMeals.data.strMeal} </h2>
          <p>{getMeals.data.strArea} food </p>
        </div>
        <div className={style.recipe}>
          <h2>Recipe</h2>
          <p>{getMeals.data.strInstructions}</p>
          <img src={getMeals.data.strMealThumb} />
          <a href={getMeals.data.strSource}>Watch video</a>
        </div>
      </div>
    </>
  );
};

export default MealItem;
