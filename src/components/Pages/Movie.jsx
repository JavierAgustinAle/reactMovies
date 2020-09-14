import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartVistoContext from '../Context/CartVistoContext'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../Context/actions'

const Movie = ({ imdbID, Poster, Title, Year }) => {

    const [state, dispatch] = useContext(CartVistoContext)
    const imgFail = 'https://matthewsenvironmentalsolutions.com/images/com_hikashop/upload/not-available.png';

    function addToList() {
        dispatch({
            type: ADD_TO_CART,
            data: imdbID
        })
    };

    function removeFromList() {
        dispatch({
            type: REMOVE_FROM_CART,
            data: imdbID
        })
    };

    return (
        <div className="mt-2 mb-2 mb-3 col-lg-4 col-md-5 col-sm-6 mx-auto">
            <div className="card text-white bg-secondary h-100 mx-auto" style={{ width: '18rem' }}>
                <div className="embed-responsive embed-responsive-1by1">
                    <Link to={`/details/${imdbID}`}>
                        <img src={Poster ? Poster : imgFail} alt={Title}
                            className="card-img-top embed-responsive-item"></img>
                    </Link>
                </div>
                <div className="card-body">
                    <h4 className="card-title text-center">{Title}</h4>
                </div>
                {state.cart.find(m => m === imdbID)
                    ? <button
                        className="button is-danger is-outlined"
                        onClick={removeFromList}
                    >Remove from List</button>
                    : <button className="button is-success is-outlined"
                        onClick={addToList} >Add To List</button>
                }
            </div>
        </div>

    )


}


export default Movie;