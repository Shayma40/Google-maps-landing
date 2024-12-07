import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer">
            <p className='Footer-copyright'>
                &copy; Sample Inc. {new Date().getFullYear()}
            </p>
        </div>
    );
};

export default Footer;