import React from 'react'
import { Link } from 'react-router-dom'

const ButtonBackToHome = () => (
    <Link className='button is-primary is-light'
        to='/reactMovies'
    >Back To Home</Link>
)

export default ButtonBackToHome;