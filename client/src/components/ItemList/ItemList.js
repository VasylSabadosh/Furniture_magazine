import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite';
import Card from '../Card/Card';
import './ItemList.scss';
import {Context} from '../../index';

const ItemList = observer(() => {
    const {item} = useContext(Context);
    return (
        <div className='item_list'>
            {item._items.map(item =>
                <Card key={item.id} item={item}/>
                )}
        </div>
    );
});

export default ItemList;