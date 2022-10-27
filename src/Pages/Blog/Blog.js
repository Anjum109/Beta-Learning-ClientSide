import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
        <div>
            <Card className='mx-auto w-50 mb-3 p-2' style={{ width: '18rem' }}>
                <Card.Body className='bg-secondary px-5 py-3 rounded text-light'>
                    <Card.Title className='mb-3'>Some Questions Ans Answer :</Card.Title>
                </Card.Body>
            </Card>
            <Card className='mx-auto w-50 mb-3 p-2' style={{ width: '18rem' }}>
                <Card.Body className='bg-secondary px-5 py-3 rounded text-light'>
                    <Card.Title className='mb-3'>what is cors?</Card.Title>

                    <Card.Text>
                        ANS: CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests. The same-origin security policy forbids cross-origin access to resources.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mx-auto w-50 mb-3 p-2' style={{ width: '18rem' }}>
                <Card.Body className='bg-secondary px-5 py-3 rounded text-light'>
                    <Card.Title className='mb-3'>Why are you using firebase? What other options do you have to implement authentication?</Card.Title>

                    <Card.Text>
                        In this process we are easily get user's info. Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mx-auto w-50 mb-3 p-2' style={{ width: '18rem' }}>
                <Card.Body className='bg-secondary px-5 py-3 rounded text-light'>
                    <Card.Title className='mb-3'>How does the private route work?</Card.Title>

                    <Card.Text>
                        ANS: The private route component is used to protect selected pages in a React app from unauthenticated users
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mx-auto w-50 mb-3 p-2' style={{ width: '18rem' }}>
                <Card.Body className='bg-secondary px-5 py-3 rounded text-light'>
                    <Card.Title className='mb-3'>What is Node? How does Node work?</Card.Title>

                    <Card.Text>
                        ANS: Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.
                        Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;