import React, { Component } from 'react'


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
        console.log(this.state.inputMovie)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Pelicula a buscar..."
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="control">
                        <button className="button is-info" href="/"> Buscar </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchForm;