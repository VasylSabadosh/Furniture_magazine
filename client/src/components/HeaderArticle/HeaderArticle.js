import React from 'react';
import './HeaderArticle.scss';

const HeaderArticle = ({text, subText}) => {
    return (
        <div>
             <div className='header__article'>
                <h1>{text}</h1>
                <h4>{subText}</h4>
            </div>
        </div>
    );
};

export default HeaderArticle;