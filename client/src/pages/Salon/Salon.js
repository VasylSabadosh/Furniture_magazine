import React, { useContext, useEffect, useState } from 'react';
import ItemPage from '../../components/ItemPage/ItemPage';
import TypeBar from '../../components/TybeBar/TypeBar.js';
import BrandBar from '../../components/BrandBar/BrandBar.js';
import ItemList from '../../components/ItemList/ItemList.js';
import {Context} from '../../index';
import {observer} from 'mobx-react-lite';

const Salon = observer(() => {
    const {item} = useContext(Context);
    const [selectedItem, setSelectedItem] = useState({})
    useEffect(()=> {
        setSelectedItem(item._items[0])
    }, [])
    return (
        <div>
            <ItemPage selectedItem={selectedItem}/>
            <TypeBar/>
            <BrandBar/>
            <ItemList item={item} setSelectedItem={setSelectedItem} />
        </div>
    );
});

export default Salon;