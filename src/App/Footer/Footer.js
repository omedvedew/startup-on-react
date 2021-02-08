import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-social-container">
                <button className="footer-social-btn f-s-b-1"></button>
                <button className="footer-social-btn f-s-b-2"></button>
                <button className="footer-social-btn f-s-b-3"></button>
                <button className="footer-social-btn f-s-b-4"></button>
            </div>
            <div className="footer-dashes container-dashes"></div>
            <p className="footer-text container-text">© 2021 Startup, Committed by Olexii Medvediev</p>
        </div>
    )
}

export default Footer;