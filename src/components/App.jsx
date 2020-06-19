import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

// Style
import '../assets/css/App.css';
import 'bulma/css/bulma.css'
// Components
import Home from './Home'
import Details from './Details'
import NotFound from './NotFound'
import ButtonGitHub from './ButtonGitHub'

class App extends Component {



  render() {
    return (
      <div className='App' >
        <ButtonGitHub /><br /><br /><br />
        <Switch>
          <Route exact path='/' component={Home} />

          <Route exact path='/details/:id' component={Details} />
          <Route component={NotFound} />
        </Switch>

      </div>

    )
  }
}



export default App;
