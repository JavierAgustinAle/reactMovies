import React, { Component } from 'react'
import axios from 'axios'


const API_KEY = 'e2c683b0'

class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    handleChange = (e) => {
        this.setState({
            inputMovie: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()          // Evita que se ejecute el evento nativo por defecto que realiza el navegador cuando enviamos el formulario
        const { inputMovie } = this.state

        axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(result => {
                const { Search = [] } = result.data
                this.props.onResults(Search)
            })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Search a movie.."
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info" href="/"> Search </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchForm;