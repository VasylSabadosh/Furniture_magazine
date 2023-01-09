import React from 'react';
import './HeaderArticle.scss';

const HeaderArticle = ({style, text, subText}) => {
    return (
        <div>
             <div className='header__article' style={ style }>
                <h1>{text}</h1>
                <h4>{subText}</h4>
            </div>
        </div>
    );
};

export default HeaderArticle;