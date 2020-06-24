import React, { useReducer } from 'react'
import CartVistoContext from './CartVistoContext';
import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';


const initialState = {
    cart: []
}

const cartVistoReducer = (state, { type, data }) => {

    if (type === ADD_TO_CART) {
        return {
            cart: state.cart.concat(data)
        }
    }

    if (type === REMOVE_FROM_CART) {
        return {
            cart: state.cart.filter(m => m.id !== data)
        }
    }

    return state
}

const CartVistoProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartVistoReducer, initialState)

    return (
        <CartVistoContext.Provider value={[state, dispatch]}>
            {children}
        </CartVistoContext.Provider>
    )

}

export default CartVistoProvider;