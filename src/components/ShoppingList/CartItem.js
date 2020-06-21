import React, { Component } from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';
import { connect } from 'react-redux';

import { deleteProduct } from '../../actions/productActions';

class CartItem extends Component {
    render() {
        const { id, name, price, desc, img } = this.props.item;
        return (
            <div key={id}>
                <Row>
                    <Col xs lg="2">
                        <Image
                            height={150}
                            widht={100}
                            src={img}
                            rounded />
                    </Col>
                    <Col xs={3}>
                        <br />
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"> {price}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={7}>
                        <Row className="desc-pad">{desc}
                        </Row>
                        <br />
                        <Row className="con-icon">
                            <button className="edit">Edit <i className="fas fa-edit"></i></button>
                            &emsp;
                            <button className="edit" onClick={this.props.onDeleteProduct}>Delete <i className="fas fa-trash-alt"></i></button>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default connect( null, { deleteProduct } )( CartItem );