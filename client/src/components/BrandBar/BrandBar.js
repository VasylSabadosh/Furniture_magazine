import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import {Context} from '../../index';
import './BrandBar.scss';

const BrandBar = observer(() => {
    const {item} = useContext(Context)
    return (
        <div className='brand_bar'>
            {item._brands.map(brand=>
            <div
            key={brand.id}
            onClick={()=>item.setSelectedBrand(brand)}
            >
            {brand.name}
            </div>
            )}
        </div>
    );
});

export default BrandBar;