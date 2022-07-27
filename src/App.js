import React,{useEffect, useState } from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, FormControl, Form, Button} from 'react-bootstrap';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=688d11ca48b21b1d3ef4bf43ceb1f5fe";

function App() {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState ('');

  useEffect(() =>{
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])

  const searchMovie = async(e) =>{
    e.preventDefault();
    console.log("Buscando...");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=688d11ca48b21b1d3ef4bf43ceb1f5fe&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);

    }
    catch(e){
      console.log(e);
    }

  }

  const changeHadler=(e)=>{
    setQuery(e.target.value);
  }
  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/home">Movie Api</Navbar.Brand>
        <Navbar.Brand href="/home">Top Filmes</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll'>
        </Navbar.Toggle>

          <Navbar.Collapse id="navbarScrooll">
            <Nav className="me-auto my-2 my-lg-3" style={{maxHeight: '100px'}} navbarScroll></Nav>

            <Form className="d-flex" onSubmit={searchMovie}>
              <FormControl
              type="search"
              placeholder="Buscar Filme"
              className="me-2"
              aria-label="search"
              name="query"
              value={query} onChange={changeHadler}></FormControl>
              <Button variant="secondary" type="submit">Buscar</Button>
            </Form>

          </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      {movies.length > 0 ?(
        <div className="container">
        <div className="grid">
          {movies.map((movieReq)=>
          <MovieBox key={movieReq.id} {...movieReq}/>)}
            </div>
    </div>
      ):(
        <h2>Error 404 - not found!</h2>
      )}
    </div>   
    </>
   
  );
}

export default App;
