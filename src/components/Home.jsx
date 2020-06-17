import React, { Component } from 'react'
// Components
import MovieList from './MoviesList'
import { Title } from './Title'
import SearchForm from './SearchForm'

class Home extends Component {
    state = {
        results: [],
        usedSearch: false
    }

    handleResult = (result) => {
        this.setState({
            results: result,
            usedSearch: true
        })
    }

    renderResults() {
        return this.state.results.length === 0
            ? <p>Results not found!</p>
            : <MovieList movies={this.state.results} />
    }

    render() {
        return (
            <div>
                <Title>Search Movies</Title>
                <div className='SearchForm-wrapper'>
                    <SearchForm onResults={this.handleResult} />
                </div><br />
                {
                    this.state.usedSearch
                        ? this.renderResults()
                        : <p>Use the form to search a movie</p>
                }
            </div>
        )
    }
}
export default Home