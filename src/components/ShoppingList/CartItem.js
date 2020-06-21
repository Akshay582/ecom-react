import React, { Component } from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';

export default class CartItem extends Component {
    render() {
        const { name, email, body } = this.props.item;
        return (
            <div>
                <Row>
                    <Col xs lg="2">
                        <Image
                            height={150}
                            widht={100}
                            src="https://img2.exportersindia.com/product_images/bc-full/2018/7/5746044/brown-plastic-chair-1531563861-4103335.jpeg"
                            rounded />
                    </Col>
                    <Col xs={3}>
                        <br />
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted"> {email}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={7}>
                        <Row className="desc-pad">{body}
                        </Row>
                        <br />
                        <Row className="con-icon">
                            <span className="icon">icon1</span>
                            <span className="icon">icon2</span>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}
