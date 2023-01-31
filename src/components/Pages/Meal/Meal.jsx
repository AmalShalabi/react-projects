import React from "react";
import MealItem from "./MealItem";
import style from "./meal.module.css";


const Meal = () => {
  return (
    <div className={style.main}>
      <div className={style.heading}>
        <h1>Search Your Food Recipe</h1>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat
          temporibus debitis consectetur. Facere delectus dicta, adipisci culpa
          dignissimos illum id accusantium vero officia nobis ea temporibus hic
          eaque obcaecati.
        </h4>
      </div>
      <div className={style.searchBox}>
<input type="search" className={style.inputBox} placeholder="Enter Recipe ..." />
      </div>
      <div className={style.container}>
<MealItem/>
      </div>
    </div>
  );
};

export default Meal;
