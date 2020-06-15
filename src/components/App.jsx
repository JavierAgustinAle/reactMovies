import React from 'react';
import { Title } from './Title'
import SearchForm from './SearchForm'
import '../assets/css/App.css';
import 'bulma/css/bulma.css'

const App = () => (
  <div className='App'>
    <Title>Search Movies</Title>
    <div className='SearchForm-wrapper'>
      <SearchForm />
    </div>

  </div>
)

export default App;
