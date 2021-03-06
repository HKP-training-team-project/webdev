const defaultState = {
    cart: [],
    items: []
}

const itemsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD-TO-CART':
            return {
                ...state,
                cart: state.cart.concat(action.payload)
            }
        case 'DELETE-ITEM':
            for(let i = 0;i < state.items.length; i++) {
                if(state.items[i].id === action.payload.id) {
                    return {
                        ...state,
                        items: [
                            ...state.items.slice(0, i),
                            ...state.items.slice(i + 1)
                        ]
                    }
                }
            }
            return state
        case 'ADD-ITEM':
            return {
                ...state,
                items: state.items.concat(action.payload)
            }
        case 'LOAD-ITEMS': 
            return {
                ...state,
                items: action.payload
            }
        case 'CLEAR-CART':
            return {
                ...state,
                cart: []
            }
        default:
            return state 
    }
}
export default itemsReducer
