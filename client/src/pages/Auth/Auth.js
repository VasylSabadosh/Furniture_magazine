import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Auth.scss';
import {  REGISTRATION_ROUTE, LOGIN_ROUTE } from "../../utils/consts"

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <div className='authContainer'>
            <div className='formContainer'>
                <form className='form'>
                    <h1 className='formTitle'>{isLogin ? 'Authorization' : 'registration'}</h1>
                    <input className='formInput' placeholder='enter your email...'></input>
                    <input className='formInput' placeholder='enter your password...'></input>
                    <div className='formRegistration'>
                        {isLogin ?
                        <div >
                            not with us yet?
                            <NavLink to={REGISTRATION_ROUTE}>registration</NavLink>
                        </div>
                        :
                        <div >
                            do you have accaunt?
                            <NavLink to={LOGIN_ROUTE}>sigh in</NavLink>
                        </div>
                        }
                        <button> {isLogin ? 'sigh in' : 'registration'}</button>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default Auth;