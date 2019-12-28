import React from 'react';
import axios from "axios";
import Movie from "./Movie"
import "./App.scss"

class App extends React.Component {
    state  = {
        isLoading : true,
        movies:[]
    };
    async componentDidMount() {
        const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({movies, isLoading: false});
    }

    render() {
        const {isLoading, movies} = this.state;
        return <section className="container">
            <div>{isLoading ?
                (<div className="loader">
                    <span className="text">로딩...</span>
                </div>)
                :
                (<div className="movies">
                    {movies.map(movie => (
                        <Movie key={movie.id} poster={movie.medium_cover_image} summary={movie.summary}
                               year={movie.year} id={movie.id} title={movie.title} genres={movie.genres}/>
                    ))}
                </div>)
            }</div>
        </section>
    }
}

export default App;
