import React from 'react';
import './Modal.scss';

const CreateBrand = ({open,onClose}) => {
    if(!open) return null
    return (
        <div className='modal' onClick={onClose}>
            <div className='modal__container' onClick={(e) => {e.stopPropagation()}}>

                <p className='close__btn' onClick={onClose}>X</p>
                <p>bbb</p>
            </div>
        </div>
    );
};

export default CreateBrand;