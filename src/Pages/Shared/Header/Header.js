import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import ToggleSet from './ToggleSet';
import './Header.css'


const Header = () => {

    const { user, logOut, id } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to='/' className='name px-5 py-2'>BETA LEARNING</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">


                        </Nav>
                        <Nav>
                            <Link className='navbar pe-3' to='/courses'>Courses</Link>
                            <Link className='navbar pe-3'>FAQ</Link>
                            <Link to='/blog' className='navbar pe-3'>Blog</Link>
                            <>
                                {
                                    user?.uid ?
                                        <>
                                            <span className='mt-2'>{user?.displayName}</span>
                                            <Button className='mx-2 px-3' variant="secondary"
                                                onClick={handleLogOut}>LogOut</Button>
                                        </>
                                        :
                                        <>
                                            <Link to='/login' className='navbar pe-3'>Login</Link>
                                            <Link className='navbar pe-3' to='/register'>Register</Link>
                                        </>
                                }
                            </>

                            <>
                                <span className='mt-1 mx-2'>
                                    {user?.photoURL ?
                                        <Image
                                            style={{ height: '40px' }}
                                            roundedCircle
                                            src={user?.photoURL}>
                                        </Image>
                                        : <FaUser></FaUser>
                                    }
                                </span>

                            </>


                            <ToggleSet></ToggleSet>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;