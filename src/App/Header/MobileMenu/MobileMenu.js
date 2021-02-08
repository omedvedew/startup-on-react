import React from 'react';

function showMobileMenu () {
    let burgerBtn = document.querySelector(".burger");
    let mobileMenuWindow = document.querySelector(".mobile-menu");
    
    mobileMenuWindow.classList.toggle("mobile-menu-active");
    burgerBtn.classList.toggle("burger-active");
};

const MobileMenu = () => {
    return (
        <div className="mobile-menu-container">
            <div className="burger" onClick={showMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className="mobile-menu">
                <a href="#home-a">Home</a>
                <a href="#services-a">Services</a>
                <a href="#about-a">About</a>
                <a href="#works-a">Works</a>
                <a href="#blog-a">Blog</a>
                <a href="#clients-a">Clients</a>
                <a href="#contacts-a">Contact</a>
            </ul>
        </div>
    )
}


export default MobileMenu;