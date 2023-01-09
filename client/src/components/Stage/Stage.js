import React from 'react';
import { NavLink } from 'react-router-dom';

import './Stage.scss';

const Stage = ({img, text, link}) => {
    return (
        <div className='stage'>
            <img src={img}></img>
            <NavLink className='stages__link' to = {link}>{text}</NavLink>

        </div>
    );
};

export default Stage;