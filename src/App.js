import React,{useEffect, useState } from 'react';
import './App.css';
import MovieBox from './MovieBox';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=688d11ca48b21b1d3ef4bf43ceb1f5fe";
function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() =>{
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])

  return (
    <div>
      {movies.map((moviesReq)=> <MovieBox/>)}
    </div>
  );
}

export default App;
