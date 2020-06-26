import React from 'react'

import MovieSeen from '../Molecules/MovieSeen'

const ButtonGitHub = () => (

    <nav className="navbar is-fixed-top is-danger" role="navigation" aria-label="main navigation">
        <div className="navbar-start">
            <a className="button is-dark is-normal" href='https://www.github.com/JavierAgustinAle'>
                <strong>GitHub @JavierAgustinAle</strong>
            </a>
        </div>

        <div className="navbar-end">
            <div className="navbar-item">
                <MovieSeen />
            </div>
        </div>

    </nav>

)

export default ButtonGitHub;