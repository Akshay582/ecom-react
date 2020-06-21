import { FETCH_PRODUCT, NEW_PRODUCT } from '../actions/types';

export const fetchProducts = () => dispatch => {
    fetch( 'https://jsonplaceholder.typicode.com/comments' )
        .then( res => res.json() )
        .then( comments => {
            dispatch( {
                type: FETCH_PRODUCT,
                payload: comments
            } )
        } )
}

export const createProduct = ( product ) => dispatch => {
    fetch( 'https://jsonplaceholder.typicode.com/comments' )
        .then( res => res.json() )
        .then( comments => {
            dispatch( {
                type: FETCH_PRODUCT,
                payload: comments
            } )
        } )
}