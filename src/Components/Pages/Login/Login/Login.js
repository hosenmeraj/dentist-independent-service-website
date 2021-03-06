import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useUpdatePassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        genarel: "",
    })
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hooksError,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

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
    const handleLogin = event => {
        event.preventDefault()
        console.log(userInfo)
        signInWithEmailAndPassword(userInfo.email, userInfo.password)

    }
    // if (loading) {
    //     return <p>Loading...</p>
    // }
    const resetPassword = async (event) => {
        // const emailRegex = /\S+@\S+\.\S+/;
        // const validEmail = emailRegex.test(event.target.value)
        // const email = event.target.value
        if (userInfo.email) {
            await sendPasswordResetEmail(userInfo.email);
            toast('Updated password');
        }
        else {
            toast('enter your email')
        }

    }
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user) {
            navigate(from)
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
            <h1 className='text-center mt-4 text-primary'>Login</h1>
            <div>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} />
                        {errors?.email && <p className="error-message">{errors.email}</p>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
                        {errors?.password && <p className='error-message'>{errors.password}</p>}
                    </Form.Group>

                    <Button variant="primary" type="submit" className='w-50 d-block mb-2 mx-auto'>
                        Login
                    </Button>
                    <p>Do you have any account? <Link to='/register' className='text-decoration-none'>Register</Link> </p>
                    <p>Forget Password? <button className='btn btn-link text-decoration-none text-primary' onClick={resetPassword}>Reset Password</button> </p>

                </Form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;