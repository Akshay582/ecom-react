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
                            <Button variant="light" onClick={this.props.Sort}>Sort by Price</Button>
                            <Button variant="light" onClick={this.props.removeSort}><i className="fas fa-times-circle"></i></Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
