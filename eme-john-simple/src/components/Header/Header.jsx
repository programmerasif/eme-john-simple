import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div>
            <div className='headerComponent'>
                <div className='img'><img src={logo} alt="" /></div>
                <div className='headerInfo'>
                    <a href="/shop">Shop</a>
                    <a href="/order">Order Review</a>
                    <a href="/manage">Manage Inventory</a>
                    <a href="/login">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Header;