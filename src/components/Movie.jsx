import React, { Component } from 'react'


class Movie extends Component {

    render() {
        const { movie } = this.props
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image">
                        <img src={movie.Poster} alt={movie.Title} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{movie.Title}</p>
                            <p className="subtitle is-6">{movie.Year}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default Movie;