import React from 'react';
import { NavLink } from 'react-router-dom';

import './HeaderNav.scss';
import template from '../../img/logo23.png';

const HeaderNav = () => {
    return (
        <div className='header'>
            <div className='header_nav'>
                <div className='header_left'>
                    <img src={template} className='header_logo' alt='#'></img>
                </div>
                <div className='header_right'>
                    <NavLink className='headerLink' to = '/'>Головна</NavLink>
                    <NavLink className='headerLink' to = '/kitchens'>Кухні</NavLink>
                    <NavLink className='headerLink' to = '/wardrobes'>Шафи</NavLink>
                    <NavLink className='headerLink' to = '/salon'>Салон</NavLink>
                    <NavLink className='headerLink' to = '/'>Контакти</NavLink>
                    <NavLink className='headerLink' to = '/auth'>логін</NavLink>
                    {/* <NavLink className='headerLink' to = 'about'>Про нас</NavLink> */}
                </div>
            </div>

        </div>
    );
};

export default HeaderNav;