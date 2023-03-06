import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../../index';
import './TypeBar.scss';

const TypeBar = observer(() => {
    const {item} = useContext(Context)
    return (
        <div className='type_bar'>
            {item._types.map(type=>
            <div
            key={type.id}
            onClick={()=>item.setSelectedType(type)}>
            {type.name}
            </div>
            )}
        </div>
    );
});

export default TypeBar;