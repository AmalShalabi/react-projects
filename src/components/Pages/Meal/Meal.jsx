import React, { useState } from "react";
import MealItem from "./MealItem";
import style from "./meal.module.css";

const Meal = () => {
  const [search, setSearch] = useState();
  const [myMeal, setMyMeal] = useState([]);

  const searchMeal = (evt) => {
    if (evt.key == "Enter") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setMyMeal(data.meals);
          //   console.log(data);
        });
    }
  };
  return (
    <div className={style.main}>
      <div className={style.heading}>
        <h1>Search Your Food Recipe</h1>
        <br />
        <br />
        <h4>
          This is a recipe search website that lets you search by ingredients
          you have at home..
        </h4>
      </div>
      <div className={style.searchBox}>
        <input
          type="search"
          className={style.inputBox}
          placeholder="Enter Recipe Name ..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onKeyPress={searchMeal}
        />
      </div>
      <div className={style.container}>
        {myMeal ? (
          myMeal.map((res) => <MealItem data={res} />)
        ) : (
          <p className={style.notFound}>Not Found</p>
        )}
      </div>
    </div>
  );
};

export default Meal;
