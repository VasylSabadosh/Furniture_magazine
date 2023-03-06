import React from 'react';
import './ItemPage.scss';

const ItemPage = ({selectedItem}) => {

    return (
        <div className='itemPage'>
            <div className='itemPageContainer'>
                <div className='itemPageLeft'>
                    <h1>{selectedItem.name}</h1>
                    <h2>brand</h2>
                    <span>{selectedItem.price}</span>
                    <button>to basket</button>
                </div>
                <div className='itemPageRight'>
                    <img alt ='#' src={selectedItem.img} className='itemPageRightImg'></img>
                </div>
            </div>
        </div>
    );
};

export default ItemPage;