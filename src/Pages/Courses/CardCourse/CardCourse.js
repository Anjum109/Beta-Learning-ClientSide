import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const CardCourse = () => {
    const courseDetails = useLoaderData([]);
    // console.log(courseDetails);
    const { title, image_url, details, _id } = courseDetails;

    return (
        <div className='mt-5'>
            <Card className='bg-secondary mx-auto w-50'>
                <Card.Img className='p-2' variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title className='title'>{title}</Card.Title>
                    <Card.Text>
                        {details.length > 50 ?
                            <>{
                                details.slice(0, 50) + '...'
                            }<Link to={`/allCourses/${_id}`}>
                                    <Button className='mt-3 button-29' style={{ width: '100%' }} variant="primary">
                                        Go Premium
                                    </Button>
                                </Link>
                            </> : <>{details}</>
                        }
                    </Card.Text>


                </Card.Body>
            </Card>
        </div>
    );
};

export default CardCourse;