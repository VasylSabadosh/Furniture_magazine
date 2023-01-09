import React from 'react';
import './Main.scss';
import Services from '../../components/Services/Services';
import HeaderArticle from '../../components/HeaderArticle/HeaderArticle.js';

import HeaderBackgrounde from '../../components/HeaderBackgrounde/HeaderBackgrounde.js'

import designLogo from '../../img/design.png';
import engineLogo from '../../img/engine.png';
import deliveryLogo from '../../img/delivery.png';
import deliveryEULogo from '../../img/eu.png';

import backgrounde from '../../img/121641560_10157941829192799_5517746078960510832_n.jpg';


const Main = () => {
    const text1 = 'Ми готові допомогти з вашим дизайном';
    const text2 = 'Доставка з комплектацією';
    const text3 = 'Вітаємо комерційні запити та можемо запропонувати індивідуальні продукти для будь-якого проекту.';
    const text4 = 'Можемо доставити в Європу';

    return (
        <div>
            <div className='main'>
                <HeaderBackgrounde img={backgrounde} style={{ objectPosition: "0 -500px" }} />
                <div className='container'>
                    <HeaderArticle
                        text={'Great style is easy.'}
                        subText={'The best way to buy beautiful modern furniture'} />
                    <div className='services__container'>
                        <Services img={designLogo} text={text1} />
                        <Services img={deliveryLogo} text={text2} />
                        <Services img={engineLogo} text={text3} />
                        <Services img={deliveryEULogo} text={text4} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;