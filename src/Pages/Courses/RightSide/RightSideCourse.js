import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import './RightSide.css'

const RightSideCourse = () => {
    const [coursesList, setCoursesList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCoursesList(data));
    }, [])

    return (
        <div>
            <h2 className='button-29 mt-5'>Choose Your Course </h2>
            <div className='mt-5 column'>
                {
                    coursesList.map(category => <p
                        key={category.id}

                    >
                        <Row>
                            <Col>
                                <Card style={{ width: '18rem', height: '400px' }}>
                                    <Card.Img variant="top" src={category.image_url} />
                                    <Card.Body>
                                        <Button className='text-white button-29' style={{ width: '100%' }} variant='secondary'>  <Link className='button-text' to={`/courses/${category.id}`}>{category.name}</Link></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </p>)
                }
            </div>
        </div>
    );
};

export default RightSideCourse;