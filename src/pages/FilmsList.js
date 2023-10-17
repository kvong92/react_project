import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import MovieCard from '../components/MovieCard.js';
import ReactPaginate from 'react-paginate';
import '../assets/css/filmslist.css';

function GetMovies() {
    const { page } = useParams();
    const navigate = useNavigate();

    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(page || 1);

    function getTMDB(page) {
        const API_KEY = "3b8a70e7ea204cf6312ffa556032f7f3";
        const BASE_URL = "https://api.themoviedb.org/3";

        const movieURL = `${BASE_URL}/movie/popular/?api_key=${API_KEY}` + "&page=" + page;
        axios.get(movieURL)
            .then(res => {
                const movies = res.data.results;
                console.log(movies);
                setMovies(movies);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getTMDB(page || currentPage);
    }, [page, currentPage]);

    const handlePageClick = (data) => {
        const selectedPage = data.selected + 1;
        setCurrentPage(selectedPage);
        navigate(`/FilmsList/${selectedPage}`);
    };

    return (
        <>
            <div className="filmslist">
                {movies.map((movie, index) => (
                    <MovieCard data={movie} key={index} />
                ))}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={500}
                previousLabel="< Previous"
                marginPagesDisplayed={1}
                containerClassName="pagination"
                subContainerClassName="pages pagination"
                activeClassName="active"
            />
        </>
    );
}

export default GetMovies;
