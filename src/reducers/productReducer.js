import { FETCH_PRODUCT, NEW_PRODUCT } from '../actions/types';

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
        default:
            return state;
    }
}