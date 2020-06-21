import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/productActions';

import CartItem from './CartItem';

class ShoppingList extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            products: []
        }
        this.onDeleteProduct = this.onDeleteProduct.bind( this );
    }
    componentDidMount() {
        this.props.fetchProducts();
    }
    componentWillReceiveProps( nextProps ) {
        this.setState( { products: nextProps.products } )
        let product = nextProps.newProduct;
        if ( product ) {
            this.props.products.unshift( product );
        }
    }
    onDeleteProduct( index ) {
        const newProducts = Object.assign( [], this.state.products );
        newProducts.splice( index, 1 );
        this.setState( { products: newProducts } )
    }
    render() {
        const productItems = this.state.products;
        if ( this.props.sorted ) {
            productItems.sort( function ( a, b ) {
                return parseInt( a.price.substring( 1 ) ) - parseInt( b.price.substring( 1 ) );
            } );
        }
        console.log( 'Shopping list render method: ', this.state.products )
        return (
            <Container>
                {productItems.map( ( item, index ) => (
                    < CartItem item={item}
                        onDeleteProduct={this.onDeleteProduct.bind( this, index )} />
                ) )}
            </Container>
        )
    }
}

const mapStateToProps = state => ( {
    products: state.products.products,
    newProduct: state.products.product
} )

export default connect( mapStateToProps, { fetchProducts } )( ShoppingList );