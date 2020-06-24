import React from 'react'
import { Switch, Route } from 'react-router-dom'


// Components
import Home from '../components/Pages/Home'
import Details from '../components/Templates/Details'
import NotFound from '../components/Atoms/NotFound'
import ButtonGitHub from './Organisms/ButtonGitHub'

const AppRoutes = () => (
    <div className='App'>
        <ButtonGitHub /><br /><br /><br />
        <Switch>
            <Route exact path='/reactMovies' component={Home} />

            <Route exact path='/details/:id' component={Details} />
            <Route component={NotFound} />
        </Switch>
    </div>
)

export default AppRoutes;