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