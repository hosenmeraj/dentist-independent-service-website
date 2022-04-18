import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css'

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hooksError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confrimPassword: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        genarel: "",
    })


    const handleEmailChange = event => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(event.target.value)
        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value })
            setErrors({ ...errors, email: '' })
        }
        else {
            setErrors({ ...errors, email: "Invalid Email" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }
    const handlePasswordChange = event => {
        const passwordRegex = /.{6,}/
        const validPassword = passwordRegex.test(event.target.value)
        if (validPassword) {
            setUserInfo({ ...userInfo, password: event.target.value })
            setErrors({ ...errors, password: '' })
        }
        else {
            setErrors({ ...errors, password: "Minimum 6 Character!" })
            setUserInfo({ ...userInfo, password: "" })

        }
    }
    const handleConfrimPasswordChange = event => {
        if (event.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confrimPassword: event.target.value })
            setErrors({ ...errors, password: "" })
        }
        else {
            setErrors({ ...errors, password: "Password's don't match" })
            setUserInfo({ ...userInfo, confrimPassword: "" })
        }
    }
    const handleRegister = event => {
        event.preventDefault()
        console.log(userInfo)
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)

    }
    const navigate = useNavigate()
    const location = useLocation()
    // const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate('/home')
        }
    }, [user])
    useEffect(() => {
        const error = hooksError
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast('Invalid email provided, please provide a valid email')
                    break;
                case "auth/invalid-password":
                    toast('Wrong password. Intruder!!')
                default:
                    toast("something went worng!")
            }
        }
    }, [hooksError])

    return (
        <div className='mx-auto w-25 login'>
            <h1 className='text-center mt-4 text-primary'>Register</h1>
            <div>
                <Form onSubmit={handleRegister}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} />
                        {errors?.email && <p className='error-message'>{errors.email}</p>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
                        {errors.password && <p className='error-message'>{errors.password}</p>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="confrim-password" onChange={handleConfrimPasswordChange} />
                        {errors.confrimPassword && <p className='error-message'>{errors.confrimPassword}</p>}
                    </Form.Group>

                    <Button variant="primary" type="submit" className='w-50 d-block mb-2 mx-auto'>
                        Register
                    </Button>
                    <p>Do you have any account? <Link to='/Login' className='text-decoration-none'>Login</Link> </p>
                </Form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Register;