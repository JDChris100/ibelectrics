import React from 'react';
import './Header.css';

export default function Header(props) {
    const {logo} = props;
    return (
        <div className="Header">
            <a href="/" className="Header-Logo">
                <img alt="Logo" src={logo}/>
                <h1>IB Electrical</h1>
            </a>
            <div className="Header-Content">
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/services">Services</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/contact">Contact Us</a>
            </div>
            <div className="Header-Login">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
        </div>
    );
}