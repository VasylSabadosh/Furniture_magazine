import React, { useContext, useState } from 'react';
import {Context} from '../../index';
import './Modal.scss';

const CreateItem = ({open,onClose}) => {
    const {item} = useContext(Context);
    const [info, setInfo] = useState([]);
    const addInfo = () => {
        setInfo([...info, {title:'', description:'', number:Date.now()}])
    }
    if(!open) return null
    return (
        <div className='modal' onClick={onClose}>
            <div className='modal__container' onClick={(e) => {e.stopPropagation()}}>
                <form className='modal__main'>

                    {/* --------------------------header------------------------ */}
                    <div className='modal__header'>
                        <h1>Добавити товар</h1>
                    </div>
                    <div className='modal__body'>

                        {/* --------------------type input----------------------------- */}
                        <div className='modal__body__dropdawn'>
                            <label for="item-type">Виберіть тип товара:</label>
                                <select name='item-type'>
                                    {item._types.map(type =>
                                        <option key = {type.id} >{type.name}</option>
                                    )}
                                </select>
                        </div>

                        {/*---------------------- brand input ---------------------------- */}
                        <div className='modal__body__dropdawn'>
                            <label for="item-brand">Виберіть бренд товара:</label>
                                <select name='item-brand'>
                                {item._brands.map(brand =>
                                        <option key = {brand.id} >{brand.name}</option>
                                    )}
                                </select>
                        </div>
                        {/*---------------------- name input ---------------------------- */}
                        <div className='modal__body__dropdawn'>
                            <label for="item-name">Уведіть назву товара:</label>
                                <input type='text' name='item-name' placeholder='назва товара'></input>
                        </div>

                        {/*---------------------- price input ---------------------------- */}
                        <div className='modal__body__dropdawn'>
                            <label for="item-price">Уведіть назву товара:</label>
                                <input type='number' name='item-price' placeholder='ціна товара'></input>
                        </div>

                        {/*---------------------- picture input ---------------------------- */}
                        <div className='modal__body__dropdawn'>
                            <label for="item-picture">Уведіть назву товара:</label>
                                <input type='file' name='item-picture' placeholder='ціна товара'></input>
                        </div>

                    </div>
                    <div className='modal__footer'>
                        <button>закрити</button>
                        <button>добавити</button>
                    </div>
                </form>
                <p className='close__btn' onClick={onClose}>X</p>
            </div>
        </div>
    );
};

export default CreateItem;