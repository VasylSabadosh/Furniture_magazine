import React from 'react';
import './Card.scss';

const Card = ({item, setSelectedItem}) => {
    return (
        <div>
            <div className='card' onClick={()=> setSelectedItem(item)}>
                <img className='card_img' alt='' src={item.img}></img>
            </div>
            <div>{item.name}</div>

        </div>
    );
};

export default Card;