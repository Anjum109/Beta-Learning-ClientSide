import React from 'react';
import { Image } from 'react-bootstrap';
import image from './circle_PNG56 (1).png'
const Home = () => {
    return (

        <div className='d-flex justify-content-center align-items-center '>
            <div className='m-5'>
                <Image className='w-50 d-flex justify-content-center align-items-center' src={image}></Image>
            </div>
            <div variant='light'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ullam facere voluptatibus tempore nisi libero aliquid error sint doloribus, explicabo temporibus similique sed sequi ea adipisci! Veniam odit autem possimus vitae tempore alias nobis neque nam fugiat dolorem saepe quam placeat labore quos, sapiente eos, optio maxime harum earum dolore.
            </div>
        </div>

    );
};

export default Home;