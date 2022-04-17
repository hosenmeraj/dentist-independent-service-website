import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='mx-auto w-25 login'>
            <h1 className='text-center mt-4 text-primary'>Login</h1>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className='w-50 d-block mb-2 mx-auto'>
                        Login
                    </Button>
                    <p>Do you have any account? <Link to='/register' className='text-decoration-none'>Register</Link> </p>
                    <p>Forget Password? <button className='btn btn-link text-decoration-none text-primary'>Reset Password</button> </p>

                </Form>
            </div>
        </div>
    );
};

export default Login;