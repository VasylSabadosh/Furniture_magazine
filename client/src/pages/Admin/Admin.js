import React, { useState } from 'react';
import './Admin.scss';
import Modal from '../../components/Modal/Modal';

const Admin = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className='admin'>
            <button className='admin__btn' onClick={() => setOpenModal(true)}>Добавити товар</button>
            <button className='admin__btn' onClick={() => setOpenModal(true)}>Добавити тип товара</button>
            <button className='admin__btn' onClick={() => setOpenModal(true)}>Добавити бренд товара</button>
            <Modal open={openModal} onClose={()=> setOpenModal(false)}/>
        </div>
    );
};

export default Admin;