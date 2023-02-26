import React from 'react';
import './Card.scss';

const Card = ({item}) => {
    return (
        <div>
            <div className='card'>
                <img className='card_img' alt='' src={item.img}></img>
                <div>{item.name}</div>
            </div>
        </div>
    );
};

export default Card;