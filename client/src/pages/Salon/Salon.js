import React from 'react';
import ItemPage from '../../components/ItemPage/ItemPage';
import TypeBar from '../../components/TybeBar/TypeBar.js';
import ItemList from '../../components/ItemList/ItemList.js';

const Salon = () => {
    return (
        <div>
            <ItemPage/>
            <TypeBar/>
            <ItemList/>
        </div>
    );
};

export default Salon;