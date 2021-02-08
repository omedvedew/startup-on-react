import React from 'react';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import MobileMenu from './MobileMenu/MobileMenu';

const Header = () => {
    return (
        <header className="header">
            <Logo/>
            <Menu/>
            <MobileMenu/>
        </header>
    )
}

export default Header;