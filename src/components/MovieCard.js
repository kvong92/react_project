import React from "react";
import '../assets/css/moviecard.css'

function MovieCard(props) {
    return (
        <div className="movie-card">
            <img src={"https://image.tmdb.org/t/p/w200/" + props.data.poster_path} alt={props.data.title} />
            <h2>{props.data.title}</h2>
            <p>{props.data.overview.slice(0, 100) + "..." }</p>
            <a href = {`https://www.themoviedb.org/movie/${props.data.id}`} target="_blank" rel="noreferrer">More Info</a>
        </div>
    );
}

export default MovieCard;