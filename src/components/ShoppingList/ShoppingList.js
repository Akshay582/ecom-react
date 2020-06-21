import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/productActions';

import CartItem from './CartItem';

class ShoppingList extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        const productItems = this.props.products;
        return (
            <Container>
                {productItems.map( item => (
                    < CartItem item={item} />
                ) )}
            </Container>
        )
    }
}

const mapStateToProps = state => ( {
    products: state.products.products
} )

export default connect( mapStateToProps, { fetchProducts } )( ShoppingList );