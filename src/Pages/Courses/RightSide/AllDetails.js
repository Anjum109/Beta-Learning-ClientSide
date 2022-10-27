import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactPlayer from 'react-player';
import { Link, useLoaderData } from 'react-router-dom';
import DownloadPage from '../CardCourse/DownloadPage/DownloadPage';

const AllDetails = () => {
    const cardDetails = useLoaderData([]);
    const { title, details, image_url } = cardDetails;
    console.log(cardDetails);
    return (
        <div>
            <div>
                <DownloadPage rootElementId="pageToDownload" downloadFileName="testPage"></DownloadPage>
            </div>
            <div id='pageToDownload'>
                <Card className='mx-auto w-50'>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Card.Text>
                            Tutorial Video for learning purpose:
                        </Card.Text>


                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default AllDetails;