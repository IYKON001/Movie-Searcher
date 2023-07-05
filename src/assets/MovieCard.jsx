import React from "react"

// const BookCard = ({Books}) => {
//     return (
//     <div className="Books">
//         <div>
//             <p>{Books.Year}</p>
//         </div>

//         <div>
//             <img src={Books.image !== 'N/A' ? Books.image : "https://via.placeholder.com/400"} alt={Books.Title}/>

//         </div>

//         <div>
//             <span>{Books.Type}</span>
//             <h3>{Books.Title}</h3>
//         </div>
//     </div>
//     )
// }



const MovieCard = ({movie}) => {
    return (
    <div className="movie">
        <div>
            <p>{movie.Year}</p>
        </div>

        <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title}/>
        </div>

        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div>
    )
}

export default MovieCard;