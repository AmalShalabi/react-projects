import React from "react";
import style from "./naruto.module.css";

export const AnimeList = ({ animelist, setAnimeInfo, animeComponent, handleList }) => {
  const AddToList = animeComponent;
  return (
    <>
      {animelist
        ? animelist.map((anime, index) => (
            <div
              key={index}
              className={style.card}
              onClick={() => setAnimeInfo(anime)}
            >
              <img src={anime.images.jpg.large_image_url} alt="animeImg" />
              <div className={style.animeInfoCard}>
                <h4>{anime.title}</h4>
                <div className={style.overlay} onClick={()=>handleList(anime)}>
                  <h4>{anime.title_english}</h4>
                  <h3>SYNOPSIS</h3>
                  <div className={style.synopsis}>
                    <p>{anime.synopsis}</p>
                  </div>
                  <AddToList/>
                </div>
              </div>
            </div>
          ))
        : "Not Found"}
    </>
  );
};
