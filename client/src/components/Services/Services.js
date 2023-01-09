import React from 'react';
import './Services.scss';

const Services = ({text, img} ) => {
    return (
        <div className='services'>
            <div className='servicesLogo'>
                <img src={img}></img>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default Services;