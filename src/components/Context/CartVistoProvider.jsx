import React, { useReducer } from 'react'
import CartVistoContext from './CartVistoContext';
import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';
import ContextDevTool from 'react-context-devtool';


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
            cart: state.cart.filter(m => m !== data)

        }
    }

    return state
}

const CartVistoProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartVistoReducer, initialState)

    return (
        <CartVistoContext.Provider value={[state, dispatch]}>
            <ContextDevTool context={CartVistoContext} id="uniqContextId" displayName="Context Movies" />
            {children}
        </CartVistoContext.Provider>
    )

}

export default CartVistoProvider;