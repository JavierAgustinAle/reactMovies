import React, { Component } from 'react'
//Component
import Movie from '../Pages/Movie'


class MovieList extends Component {

    render() {
        const { movies } = this.props
        return (
            <div className="row pl-2 pr-2 pb-3">
                {
                    movies.map(movie => {
                        return (
                            <Movie movie={movie}
                                imdbID={movie.imdbID}
                                Poster={movie.Poster}
                                Title={movie.Title}
                                Year={movie.Year}
                                key={movie.imdbID} />

                        )
                    })
                }
            </div>
        )

    }

}

export default MovieList;