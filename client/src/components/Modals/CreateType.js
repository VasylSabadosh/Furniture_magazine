import React from 'react';
import './Modal.scss';

const CreateType = ({open,onClose}) => {
    if(!open) return null
    return (
        <div className='modal' onClick={onClose}>
            <div className='modal__container' onClick={(e) => {e.stopPropagation()}}>
                <div className='modal__main'>
                    <div className='modal__header'>
                        <h1>Добавити тип товара</h1>
                    </div>
                    <div className='modal__body'>
                        <input placeholder='введіть назву типа товара'></input>
                    </div>
                    <div className='modal__footer'>
                        <button>закрити</button>
                        <button>добавити</button>
                    </div>
                </div>
                <p className='close__btn' onClick={onClose}>X</p>
            </div>
        </div>
    );
};

export default CreateType;