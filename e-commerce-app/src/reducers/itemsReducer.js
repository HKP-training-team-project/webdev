const defaultState = {
    cart: [],
    items: []
}

let itemsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD-TO-CART':
            return {
                ...state,
                cart: cart.push(action.payload)
            }
        case 'DELETE-ITEM':
            for(let i = 0;i < state.items.length; i++) {
                if(state.items[i].id === action.payload.id) {
                    return {
                        ...state,
                        items: items.splice(i,1)
                    }
                }
            }
        case 'ADD-ITEM':
            return {
                ...state,
                items: items.push(action.payload)
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
    }
}