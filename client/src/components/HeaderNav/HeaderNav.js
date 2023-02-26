import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './HeaderNav.scss';
import template from '../../img/logo23.png';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

const HeaderNav = observer(() => {
    const {user} = useContext(Context);
    console.log(user)
    return (
        <div className='header'>
            <div className='header_nav'>
                <div className='header_left'>
                    <img src={template} className='header_logo' alt='#'></img>
                </div>
                <div className='header_right'>
                    <NavLink className='headerLink' to='/'>Головна</NavLink>
                    <NavLink className='headerLink' to='/kitchens'>Кухні</NavLink>
                    <NavLink className='headerLink' to='/wardrobes'>Шафи</NavLink>
                    <NavLink className='headerLink' to='/salon'>Салон</NavLink>
                    {user.isAuth ?
                        <NavLink className='auth'>
                            <button >Адмін</button>
                            <button >Вийти</button>
                        </NavLink>
                        :
                        <NavLink className='headerLink' to='/auth'>
                            <button onClick={() => user.setIsAuth(true)}>Увійти</button>
                        </NavLink>
                    }
                </div>
            </div>

        </div>
    );
});

export default HeaderNav;