import { useCallback, useState, useReducer, createContext, useContext, useEffect } from "react";

export function useModalState(defaultValue = false) {
    const [isOpen, setIsOpen] = useState(defaultValue)

    const open = useCallback(() => setIsOpen(true), [])
    const close = useCallback(() => setIsOpen(false), [])

    return { isOpen, open, close }
}

export const useMediaQuery = query => {
    const [matches, setMatches] = useState(
      () => window.matchMedia(query).matches
    );
  
    useEffect(() => {
      const queryList = window.matchMedia(query);
      setMatches(queryList.matches);
  
      const listener = evt => setMatches(evt.matches);
  
      queryList.addListener(listener);
      return () => queryList.removeListener(listener);
    }, [query]);
  
    return matches;
};

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

const addItem = (state, action) => {
    let updatedCart = {}

    if (Object.keys(state.cart).includes(action.item.id)) {
        const modifiedData = {...state.cart[action.item.id], itemCount: state.cart[action.item.id].itemCount + 1}

        updatedCart = {...state.cart, [action.item.id]: {...modifiedData}}
    } else {
        updatedCart = {...state.cart, [action.item.id]: {...action.item}}
    }
     
    const updatedState = {
        cart: updatedCart,
        amount: state.amount + action.item.price,
        count: state.count + 1,
        purchasing: true
    }

    return updateObject(state, updatedState)
}

const removeItem = (state, action) => {
    const itemObj = state.cart[action.item]

    let updatedCart = {}
    let updatedAmount = 0
    let updatedCount = 0
    let purchasingState = null

    if (itemObj) {
        updatedAmount = state.amount - itemObj.price
        updatedCount = state.count - 1
        let modifiedData = {...state.cart[action.item], itemCount: state.cart[action.item].itemCount - 1}

        if (modifiedData.itemCount === 0){
            updatedCart = {...state.cart}
            delete updatedCart[action.item]
        } else {
            updatedCart = {...state.cart, [action.item]: {...modifiedData}}
        }
        
        purchasingState = updatedCount > 0 ? true : false
    } else {
        console.warn(`Can't remove product (id: ${action.item}) as it's not in cart!`)
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
        cart: {},
        amount: 0,
        count: 0,
        purchasing: false
    })

    return(
        <CartContext.Provider value={[state, dispatch]}>{children}</CartContext.Provider>
    )
}

export const useCartItems = () => useContext(CartContext)