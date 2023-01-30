import React, { useEffect, useState } from "react";
import logo from "../../../assets/tvmLogo.png"
import style  from './movie.module.css'

const Movie = () => {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async () => {
    await fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((err) => console.log(err));
  };


  const filteredMovies=movie.filter((movieName) => {
    return movieName.name.toLowerCase().includes(search.toLowerCase())
  })

  useEffect(() => {
    searchMovies();
  }, []);
  console.log(movie);
  return (
    <div>
      <h1>Choose A Life Of Entertainment Over The Boring Life</h1>
      <img className={style.logo} src={logo} alt="" />
      <div className={style.inputDiv}>
        <label htmlFor="name">Name Of The Movie</label>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className={style.container}>
        {filteredMovies
          ? filteredMovies.map((movie) => (
              <div key={movie.id}>
                <div className={style.card}>
                  <img src={movie.image.medium} />
                  <div className={style.details}>
                    <h5>{movie.name.toUpperCase()}</h5>
                    <h6>{movie.genres + "  "} </h6>
                    <p>
                      {movie.schedule.days} {movie.schedule.time}
                    </p>

                    <a
                      href={`https://www.tvmaze.com/shows/${movie.id}`}
                      target="_blank"
                    >
                      View Details..
                    </a>
                  </div>
                </div>
              </div>
            ))
          : " No Results "}
      </div>
    </div>
  );
};

export default Movie;
