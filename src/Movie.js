import React from 'react';
import PropTypes from "prop-types";
import "./Movie.scss"

function Movie({year, title, summary, poster, genres}) {
    return <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="data">
            <h3 className="title">{title}</h3>
            <h5 className="year">{year}</h5>
            <ul className={genres}>
                {genres.map((genre, idx) => <li key={idx} className="genre">{genre}</li>)}
            </ul>
            <p className="summery">{summary}</p>
        </div>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;