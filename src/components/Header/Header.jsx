import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
                <img src={logo} alt="" />
            </Link>
        </div>
    );
};

export default Header;