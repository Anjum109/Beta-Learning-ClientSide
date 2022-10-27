import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    }


    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const githubProvider = new GithubAuthProvider();

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className='mt-5 form-control'>
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='form-head'>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='form-head'>Password</Form.Label>
                        <Form.Control name="password" required type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                    <Button className='button-29 mb-3' variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
            <Form.Text className='mt-5 text-black mb-3 fs-5'>Create An Account <Link to='/register'>Register</Link></Form.Text>
            <div className='mt-3'>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSignIn} className='mb-2 px-5' variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
                    <Button onClick={handleGithubSignIn} variant="outline-dark"><FaGithub></FaGithub> Login With Github</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default Login;