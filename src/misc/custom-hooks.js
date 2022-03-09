import { useCallback, useState, useReducer, createContext, useContext } from "react";

export function useModalState(defaultValue = false) {
    const [isOpen, setIsOpen] = useState(defaultValue)

    const open = useCallback(() => setIsOpen(true), [])
    const close = useCallback(() => setIsOpen(false), [])

    return { isOpen, open, close }
}

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

const addItem = (state, action) => {
    const updatedCart = [...state.cart].concat(action.item)
    const updatedState = {
        cart: updatedCart,
        amount: state.amount + action.item.price,
        count: state.count + 1,
        purchasing: true
    }

    return updateObject(state, updatedState)
}

const removeItem = (state, action) => {
    const itemIndex = state.cart.findIndex(
        cartItem => cartItem.id === action.itemId
    )
    let updatedCart = [...state.cart]
    let updatedAmount = 0
    let updatedCount = 0
    let purchasingState = null

    if (itemIndex >= 0) {
        updatedAmount = state.amount - updatedCart[itemIndex].price
        updatedCount = state.count - 1
        updatedCart.splice(itemIndex, 1)
        purchasingState = updatedCount > 0 ? true : false
    } else {
        console.warn(`Can't remove product (id: ${action.itemId}) as it's not in cart!`)
    }

    const updatedState = {
        cart: updatedCart,
        amount: updatedAmount,
        count: updatedCount,
        purchasing: purchasingState
    }
    return updateObject(state, updatedState)
}


function reducer(prevState, action) {
    switch(action.type) {
        case 'ADD':
            return addItem(prevState, action)
        case 'REMOVE':
            return removeItem(prevState, action)
        default:
            return prevState
    }
}

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {
        cart: [],
        amount: 0,
        count: 0,
        purchasing: false
    })

    return(
        <CartContext.Provider value={[state, dispatch]}>{children}</CartContext.Provider>
    )
}

export const useCartItems = () => useContext(CartContext)