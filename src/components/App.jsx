import React, { Component } from 'react';

// Style
import '../assets/css/App.css';
import 'bulma/css/bulma.css'
// Components
import Home from './Home'
import Details from './Details'

class App extends Component {



  render() {
    const url = new URL(document.location)
    const Page = url.searchParams.has('id')
      ? <Details id={url.searchParams.get('id')} />
      : <Home />


    return (
      <div className='App'>
        {Page}
      </div>

    )
  }
}



export default App;
