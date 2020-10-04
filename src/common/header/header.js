import React from "react";
import logo from '../../logo.svg';
import './header.scss';

const Header = () => {
    return(
        <header className="main">
            <div className="container">
                <nav className="logo">
                    <img src={logo} className="img-fluid" alt="logo"/>
                    <span>Dummy Data</span>
                </nav>
            </div>
        </header>
    )
}

export default Header;