import React, { Component } from 'react'


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

    goBack() {
        window.history.back()
    }

    componentDidMount() {
        const { id } = this.props
        this.fetchMovie({ id })
    }

    render() {
        const movie = this.state.movie
        return (
            <div>
                <button onClick={this.goBack}>Back</button>
                <h1>{movie.Title}</h1>
                <img src={movie.Poster} alt={movie.Title}></img>
                <h3>{movie.Actors}</h3>
                <span>{movie.Metascore}</span>
                <p>{movie.Plot}</p>
            </div>
        )
    }

}

export default Details;