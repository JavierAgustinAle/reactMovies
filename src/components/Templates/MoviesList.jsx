import React, { Component } from 'react'
//Component
import Movie from '../Pages/Movie'


class MovieList extends Component {

    render() {
        const { movies } = this.props
        return (
            <div className='MoviesList'>
                {
                    movies.map(movie => {
                        return (
                            <div key={movie.imdbID} className='MoviesList-item'>
                                <Movie movie={movie}
                                    imdbID={movie.imdbID}
                                    Poster={movie.Poster}
                                    Title={movie.Title}
                                    Year={movie.Year} />
                            </div>
                        )
                    })
                }
            </div>
        )

    }

}

export default MovieList;