const defaultState = {
    quantity: 0,
    id: '',
    itemname: '', 
    price: '',
    description: '',
    category: '',
    pictures: []
}
const itemReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                quantity: state.quantity + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                quantity: state.quantity - 1
            }
        case 'CHANGE-NAME':
            return {
                ...state,
                name: action.payload.name
            }
        case 'CHANGE-DESCRIPTION':
            return {
                ...state,
                description: action.payload.description
            }
        case 'CHANGE-CATEGORY':
            return {
                ...state,
                category: action.payload.category
            }
        case 'CHANGE-PICTURE':
            return {
                ...state,
                pictures: state.pictures.push(action.payload.picture)
            }    
        default:
            return state
    }
}
export default itemReducer