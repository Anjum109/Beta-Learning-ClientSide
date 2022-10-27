import './Home.css'
import React from 'react';
import { Container, Image } from 'react-bootstrap';
import image from './circle_PNG56 (1).png'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <Container>
            <div className='home'>
                <div className=' m-5 mx-auto'>
                    <Image className='home-image rounded w-50 d-flex justify-content-center align-items-center' src={image}></Image>
                </div>
                <div variant='light' className=' home-pg mx-auto py-2'>
                    <span className='text-primary'> Beta</span> <span className='text-danger'>Learning</span> Project is a Programing Language website.
                    Where you can learn about different programming Languages.
                    Learn with your choice and get exiting learning way.
                    <div className='button'> <Link className='button-89' to='/login'> Login</Link></div>
                </div>

            </div>

        </Container>

    );
};

export default Home;