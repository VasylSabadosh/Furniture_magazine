import React from 'react';
import './HeaderBackgrounde.scss';


const HeaderBackgrounde = ({img, style}) => {
    return (
        <div className='backgrounde'>
            <img className='backgrounde__img' src={img} style = {style} alt='#'></img>
        </div>
    );
};

export default HeaderBackgrounde;