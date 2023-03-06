import React from 'react';
import Card from '../Card/Card';
import './ItemList.scss';

const ItemList = ({item, setSelectedItem}) => {
    return (
        <div className='item_list'>
            {item._items.map(item =>
                <Card key={item.id} item={item} setSelectedItem={setSelectedItem} />
                )}
        </div>
    );
};

export default ItemList;