import React, { Component } from 'react';
import { Form, Col, Button, Container } from 'react-bootstrap';
import { Redirect } from 'react-router';

import { connect } from 'react-redux';
import { createProduct } from '../../actions/productActions';


class AddProduct extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            redirect: false,
            post: {
                name: '',
                price: '',
                desc: '',
                img: '',
                id: ''
            }
        }
        this.onChange = this.onChange.bind( this );
        this.onSubmit = this.onSubmit.bind( this );
    }
    onChange( event ) {
        event.persist();
        this.setState( prevState => ( {
            post: {
                ...prevState.post,
                [ event.target.name ]: event.target.value
            }
        } )
        )
    }
    onSubmit( event ) {
        event.preventDefault();
        const { post } = this.state;
        this.setState( { post } )
        this.props.createProduct( post );
        this.setState( { redirect: true } )
    }
    render() {
        const { redirect } = this.state;
        if ( redirect ) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <Container>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="name" type="text" onChange={this.onChange} value={this.state.post.name} placeholder="Enter product name..." />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control name="price" type="text" onChange={this.onChange} value={this.state.post.price} placeholder="Enter product price..." />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridDesc">
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control name="desc" onChange={this.onChange} value={this.state.post.desc} placeholder="A well designed and crafted product that will suit many needs." />
                        </Form.Group>

                        <Form.Group controlId="formGridImage">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control name="img" onChange={this.onChange} value={this.state.post.img} placeholder="https://long_url@example.com" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridId">
                                <Form.Label>Id</Form.Label>
                                <Form.Control name="id" onChange={this.onChange} value={this.state.post.id} />
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default connect( null, { createProduct } )( AddProduct );