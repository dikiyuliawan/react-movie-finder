import { useEffect } from "react";
import "./App.css";
import { getMovieList } from "./api.js"
import { useState } from "react";

const App = () => {

  const [movieList, setMovieList] = useState([])

  const PopularMovies = () => {
    return movieList.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img className="Movie-img" alt="movie" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
          <div className="Movie-date">{movie.release_date}</div>
          <div className="Movie-rate">{movie.vote_average}</div>
        </div>
      )
    })
  }

  const search = (q) => {
    console.log(q)
  }

  console.log(movieList)

  useEffect(() => {
    getMovieList().then((result) => {
      setMovieList(result)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>REACT MOVIE FINDER</h1>
        <input placeholder="Search movie..." className="Movie-search" onChange={({target}) => search(target.value)} />
        <div className="Movie-container">
          <PopularMovies />
        </div>
      </header>
    </div>
  );
}

export default App;
