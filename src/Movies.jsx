/*eslint-disable*/


import { useState } from 'react'
import { useEffect } from "react"
import searchIcon from './search.svg'
import MovieCard from './assets/MovieCard'
import Loader from "./assets/Loader/"
import './App.css'

const API_URL = 'https://omdbapi.com/?apikey=e35627d0';



const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
  
    const searchMovies = async (title) => {
      setLoading(true);
    setSearchTerm(title); //changed  
    console.log(searchTerm)
  
      const response = await fetch(`${API_URL}&s=${title}`); //changed
      const data = await response.json();
       console.log(searchTerm)
      console.log(data)
      if (data.Response === 'True') {  //changed
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
  
      setLoading(false);
    };
  
    useEffect(() => {
      searchMovies('genesis');
    }, []);
  
    if (loading) {
      return <Loader />;
    }


    return(
        <div className="app">
        <h1>IYKON'S Hall Of Movies</h1>
        <p> discover and explore movies</p>
        <div className="search">
            <input
            placeholder="Welcome!, search here for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
            src={searchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
            />
        </div>

        {movies?.length > 0 ? (
            <div className="container">
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
            </div>
        ) : (
            <div className="empty">
            <h2>Sorry, no movies found</h2>
            </div>
        )}
    </div>
        
    )
}

export default Movies




    //     // const API_URL = 'https://uncovered-treasure-v1.p.rapidapi.com/topics';
    //     const API_URL ='https://omdbapi.com/?apikey=e35627d0'
    //     // console.log(API_URL)
    // function App() {
    

    //   const [movies, setMovies] = useState([]);

    // const [searchTerm, setSearchTerm] = useState("");

    // const [loading, setLoading] = useState(true);

    // const searchBooks = async title => {
    //     setLoading(true)

    //     const response = await fetch(`${API_URL}&s=${title}`);

    //     const data = await response.json();

    //     setMovies(data.Search);
    //     console.log(data)

    //     setLoading(false)
    //     };


              
    //       useEffect(() => {
    //         searchBooks('genesis')
    //     }, [])

    //      if (loading) {
    //         return (
    //             <Loader/>
    //         )
    //      }
      
    //   return(
       

    //     <div className="app">
    //         <h1>IYKON'S Hall Of Books</h1>

    //         <div className="search">
    //             <input
    //                 placeholder="welcome here!! please search for your books"
    //                 value={searchTerm}
    //                 onChange={e => setSearchTerm(e.target.value)}
    //             />
    //             <img
    //              src={searchIcon}
    //              alt="search"
    //              onClick={() => searchBooks(searchTerm)}
    //              />
    //         </div>



    //         {
    //                 // Books && Books.length > 0 
    //                 movies && movies.length > 0 
    //                 ? (
    //                     <div className="container">
    //                         {
    //                             // Books.map(Books => <BookCard key={Books.id} Books={Books} />)
    //                             movies.map(movie => <MovieCard key={movie.imdbID} Books={movie}/>)
    //                         }
    //                     </div>

    //                 ) : (
    //                     <div className="empty">
    //                         <h2>sorry no books found</h2>
    //                     </div>
    //                 )
    //         }

    //         </div>

    //   );
   
    // }

    // export default App

