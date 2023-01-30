import React, { useEffect, useState } from "react";
import { AnimeInfo } from "./AnimeInfo";
import { AnimeList } from "./AnimeList";
import style from "./naruto.module.css";

const Naruto = () => {
  const [search, setSearch] = useState("Naruto");
  const [animeData, setAnimeData] = useState([]);
  const [animeInfo,setAnimeInfo]=useState()
  const getData = async () => {
    try {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=${search}&limit=20`
      );
      const resData = await res.json();
      setAnimeData(resData.data);
    } catch (error) {
      console.log("Error:", error.message);
    }
  };
  useEffect(() => {
    getData();
  }, [search]);
  return (
    <>
      <div className={style.header}>
        <h1>My AnimeList</h1>
        <div className={style.searchBox}>
          <input
            type="search"
            placeholder="Search Your Anime"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className={style.container}>
        <div className={style.animeInfo}>
          {animeInfo && <AnimeInfo animeInfo={animeInfo}/>}
        </div>
        <div className={style.animeRow}>
            <h2 className={style.textHeading}>Anime</h2>
          <div className={style.row}>
            <AnimeList animelist={animeData} 
            setAnimeInfo={setAnimeInfo}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Naruto;
