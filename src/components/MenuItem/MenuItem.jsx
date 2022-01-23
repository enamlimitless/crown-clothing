import React from 'react';

const MenuItem = ({section}) => {
    const {title, imageUrl, size} = section;
    return (
            <div style={{backgroundImage: `url(${imageUrl})`}} className={`${size} menu-item`}>
                <div className="menu-content">
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
    );
};

export default MenuItem;