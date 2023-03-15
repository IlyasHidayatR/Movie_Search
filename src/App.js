import './App.css';
import { getMovies, searchMovies} from "./api"
import { useEffect, useState } from 'react';

function App() {

    const posterUrl = process.env.REACT_APP_BASEIMAGEURL;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      const fetchMovies = async () => {
        const movies = await getMovies();
        setMovies(movies);
      }
      fetchMovies();
    }, [])

    const moviesList = () => {
      return movies.map((movie, i) => {
        return (
          <div key={i} className="movie-wrapper">
            <div className="movie-title">{movie.title}</div>
            <img className="movie-poster" alt="movie poster" src={`${posterUrl}${movie.poster_path}`} />
            <div className="movie-date">{movie.release_date}</div>
            <div className="movie-rating">{movie.vote_average}</div>
          </div>
        )
      })
    }

    const searchMovie = (q) => {
      if (q.length > 0) {
        searchMovies(q).then((movies) => {
          setMovies(movies);
        })
      } else {
        getMovies().then((movies) => {
          setMovies(movies);
        })
      }
    }

    console.log({movies: movies})

  return (
    <div className="App">
      <header className="App-header">
       <h1>Search Movie Engine</h1>
       <input type="text" placeholder="Search Movie" className="movie-search" onChange={(e) => searchMovie(e.target.value)} />
       <div className="movie-container">
          {moviesList()}
       </div>
      </header>
    </div>
  );
}

export default App;
