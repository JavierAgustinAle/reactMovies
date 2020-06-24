import React, { useContext } from 'react'
import CartVistoContext from '../Context/CartVistoContext'


const MovieSeen = () => {

    const [state] = useContext(CartVistoContext)

    return (
        <span className="tag is-light is-medium">
            Watchlist: { state.cart.length}
        </span>
    )

}

export default MovieSeen;