import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <>
            <Navbar bg="primary" expand="lg" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to='/'> <span className='text-white fw-bold'>Mrs. Sabrina</span> < span className='heighLight fw-bold fs-1' > Leaser Denteal</span ></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto link">
                            <Nav.Link as={Link} to="/home" href="#home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services" href="#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/blog" href="#blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/about" href="#about">About</Nav.Link>
                            {user ?
                                <button className='btn btn-link text-decoration-none text-white' onClick={handleSignOut}>Sign out</button>
                                :
                                <Nav.Link as={Link} to='/login'>Login</Nav.Link>}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;