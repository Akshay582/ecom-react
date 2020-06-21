import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default class Sort extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className="sort-row">
                        <Col></Col>
                        <Col md="auto"></Col>
                        <Col xs lg="2">
                            <Button variant="light">Sort by Price</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
