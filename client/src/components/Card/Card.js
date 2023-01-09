import React from 'react';
import './Card.scss';


const Card = ({fasad, title, text, example}) => {

    return (
        <div className='card'>
            <div className='card__img'>
                <img src={ fasad }></img>
            </div>
            <div className='card__description'>
                <h2>{ title }</h2>
                <p>{ text }</p>
            </div>
            <div className='card__example' >
                <img src= {example}></img>
            </div>
        </div>
    );
};

export default Card;