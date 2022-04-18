import React from 'react';
import "./Footer.css"

const Footer = () => {
    var today = new Date();
    var year = today.getFullYear();
    return (
        <div className='footer text-center bg-primary'>
            <p>Copyright &copy; {year} Meraj Hosen</p>
        </div>
    );
};

export default Footer;