import { FETCH_PRODUCT, NEW_PRODUCT, DELETE_PRODUCT } from '../actions/types';

const initialState = {
    products: []
}

export default function ( state = initialState, action ) {
    switch ( action.type ) {
        case FETCH_PRODUCT:
            return {
                ...state,
                products: action.payload
            }
        case NEW_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter( ( product, id ) => id !== action.payload )
            }
        default:
            return state;
    }
}