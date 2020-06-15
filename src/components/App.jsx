import React, { Component } from 'react';

// Style
import '../assets/css/App.css';
import 'bulma/css/bulma.css'
// Components
import { Title } from './Title'
import SearchForm from './SearchForm'
import MovieList from './MoviesList';

class App extends Component {

  state = {
    results: []
  }
  handleResult = (result) => {
    this.setState({
      results: result
    })
  }


  render() {
    return (

      <div className='App'>
        <Title>Search Movies</Title>
        <div className='SearchForm-wrapper'>
          <SearchForm onResults={this.handleResult} />
        </div>
        {this.state.results === undefined || this.state.results.length === 0
          ? <p>Sin Resultados</p>
          : <MovieList movies={this.state.results} />
        }
      </div>

    )
  }
}



export default App;
