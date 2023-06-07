import React from 'react';
import './HeaderBackgrounde.scss';


const HeaderBackgrounde = ({img}) => {
    return (
        <div className='backgrounde'>
            <img className='backgrounde__img' src={img} alt='#'></img>
        </div>
    );
};

export default HeaderBackgrounde;