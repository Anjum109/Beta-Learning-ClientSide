import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import LeftSideCourse from '../LeftSide/LeftSideCourse';
import RightSideCourse from '../RightSide/RightSideCourse';


const Courses = () => {
    return (
        <div>

            <Container>
                <Row>
                    <Col lg="4">
                        <LeftSideCourse></LeftSideCourse>
                    </Col>
                    <Col lg="8">
                        <RightSideCourse></RightSideCourse>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;