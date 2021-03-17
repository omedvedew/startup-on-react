import React from 'react';
import { animateScroll as scroll, scroller} from 'react-scroll';

const Menu = () => {

    const scrollTo = (e) => {
        scroller.scrollTo(e, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    return (
        <div className="menu">
            <a href="#home-a" onClick={() => scrollTo('home')}>Home</a>
            <a href="#services-a" onClick={() => scrollTo('services')}>Services</a>
            <a href="#about-a" onClick={() => scrollTo('about')}>About</a>
            <a href="#works-a" onClick={() => scrollTo('works')}>Works</a>
            <a href="#blog-a" onClick={() => scrollTo('blog')}>Blog</a>
            <a href="#clients-a" onClick={() => scrollTo('clients')}>Clients</a>
            <a href="#contacts-a" onClick={() => scrollTo('contacts')}>Contact</a>
        </div>
    )
}

export default Menu;