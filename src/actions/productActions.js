import { FETCH_PRODUCT, NEW_PRODUCT, DELETE_PRODUCT } from '../actions/types';

export const fetchProducts = () => dispatch => {
    fetch( 'https://my-json-server.typicode.com/Akshay582/ecom-react/products' )
        .then( res => res.json() )
        .then( products => {
            dispatch( {
                type: FETCH_PRODUCT,
                payload: products
            } )
        } )
}

export const createProduct = ( product ) => dispatch => {
    fetch( 'https://my-json-server.typicode.com/Akshay582/ecom-react/products', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify( product )
    } )
        .then( res => res.json() )
        .then( product => {
            console.log( 'Added new Product.' )
            dispatch( {
                type: NEW_PRODUCT,
                payload: product
            } )
        } )
}

export const deleteProduct = ( id ) => dispatch => {
    dispatch( {
        type: DELETE_PRODUCT,
        payload: id
    } )
}