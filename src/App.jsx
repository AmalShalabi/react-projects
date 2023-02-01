// import './App.css'
import Meal from "./components/Pages/Meal/Meal";
import Movie from "./components/Pages/Movies/Movie";
import Naruto from "./components/Pages/Naruto/Naruto";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/home";

function App() {
  return (
    <>
      {/* <Movie/> */}
      {/* <Naruto/> */}
      {/* <Meal/> */}
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/naruto" element={<Naruto />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/recipe" element={<Meal />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
