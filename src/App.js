import React,{useEffect, useState } from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';

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
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="">Movie Api</Navbar.Brand>
        <Navbar.Brand href="">Top Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll'>
          <Navbar.Collapse id="navbarScrooll">
            <Nav className="me-auto my-2 my-lg-3" style={{maxHeight: '100px'}} navbarScroll>
            </Nav>
          </Navbar.Collapse>
        </Navbar.Toggle>
      </Container>
    </Navbar>
      <div className='container'>
        <div className='grid'>
          {movies.map((moviesReq)=> 
          <MovieBox key={moviesReq.id} {...moviesReq}/>)}
        </div>
      </div>
    </>
  );
}

export default App;
