import React, { useState } from 'react';
import './Admin.scss';
import CreateItem from '../../components/Modals/CreateItem';
import CreateBrand from '../../components/Modals/CreateBrand';
import CreateType from '../../components/Modals/CreateType';

const Admin = () => {
    const [openCreateItem, setOpenCreateItem] = useState(false);
    const [openCreateBrand, setOpenCreateBrand] = useState(false);
    const [openCreateType, setOpenCreateType] = useState(false);
    return (
        <div className='admin'>
            <button className='admin__btn' onClick={() => setOpenCreateItem(true)}>Добавити товар</button>
            <button className='admin__btn' onClick={() => setOpenCreateBrand(true)}>Добавити бренд товара</button>
            <button className='admin__btn' onClick={() => setOpenCreateType(true)}>Добавити тип товара</button>

            <CreateItem open={openCreateItem} onClose={()=> setOpenCreateItem(false)}/>
            <CreateBrand open={openCreateBrand} onClose={()=> setOpenCreateBrand(false)}/>
            <CreateType open={openCreateType} onClose={()=> setOpenCreateType(false)}/>
        </div>
    );
};

export default Admin;