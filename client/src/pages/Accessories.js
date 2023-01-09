import React from 'react';
import HeaderBackgrounde from '../components/HeaderBackgrounde/HeaderBackgrounde';
import backgrounde from '../img/kitchenbg.jpg';

const Accessories = () => {
    return (
        <div>
            <HeaderBackgrounde
                img={backgrounde}
                style={{ objectPosition: "0px -700px" }} />
        </div>
    );
};

export default Accessories;