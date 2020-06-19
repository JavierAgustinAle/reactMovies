import React, { Component } from 'react'

import ButtonBackToHome from './ButtonBackToHome'


const API_KEY = 'e2c683b0'
class Details extends Component {

    state = {
        movie: {}
    }

    fetchMovie({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                this.setState({ movie })
            })

    }

    componentDidMount() {
        const { id } = this.props.match.params
        this.fetchMovie({ id })
    }

    render() {
        const movie = this.state.movie
        return (
            <div>
                <ButtonBackToHome />
                <h1>{movie.Title}</h1>
                {
                    movie.Poster
                        ? <img src={movie.Poster} alt={movie.Title}></img>
                        : <img src='data:image/jpeg;base64,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'
                            alt={movie.Title}></img>
                }



                <div className="column is-narrow">
                    <p className="bd-notification is-primary">
                        <code className="html">Metascore</code><br />
                        <code className="html">{movie.Metascore}</code>

                    </p>
                </div><div className="column is-narrow">
                    <p className="bd-notification is-primary">
                        <code className="html">Actors</code><br />
                        <code className="html">{movie.Actors}</code>
                    </p>
                </div>
                <div className="columns is-mobile is-centered">
                    <div className="column is-half">
                        <p className="bd-notification is-primary">
                            <code className="html">Movie Plot</code><br />
                            <code className="html">{movie.Plot}</code><br />
                        </p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Details;