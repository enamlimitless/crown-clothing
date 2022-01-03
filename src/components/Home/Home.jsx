import React from 'react';
import './Home.scss';
const Home = () => {
    return (
        <div className='homepage'>
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="menu-content">
                        <h1 className='title'>HEATS</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-content">
                        <h1>SNEAKERS</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-content">
                        <h1>JACKETS</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-content">
                        <h1>MENS</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-content">
                        <h1>WOMEN</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;