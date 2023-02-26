import React from 'react';
import './ItemPage.scss';

const ItemPage = () => {
    const item = {id: 1, name: "АГНЕС", price: 2000, rating: 5, img: `https://i0.wp.com/frankof.com.ua/wp-content/uploads/2021/01/%D0%90%D0%B3%D0%BD%D0%B5%D1%81.jpg?fit=872%2C1000&ssl=1`};
    const description = 'Стільці «Агнес» підійдуть для кухні, вітальні, обідньої зони або робочого простору. Завдяки експлуатаційним характеристикам меблів FRANKOF їх вибирають власники салонів краси, ресторанів і кафе, готелів. Надійний каркас, що закріплений на дерев’яних ніжках, запросто витримує вагу до 120 кг. Ергономіка сидіння забезпечує зручну посадку й комфортне проведення часу. Висота спинки із нахиленою формою припаде до душі любителям комфорту й затишку. Лаконічний дизайн каретною стяжкою та вибір кольору оббивки роблять модель універсальною для будь-якої стилістики інтер’єру.';
    return (
        <div className='itemPage'>
            <div className='itemPageContainer'>
                <div className='itemPageLeft'>
                    <h1>{item.name}</h1>
                    <h2>brand</h2>
                    <span>{description}</span>
                    <button>to basket</button>
                </div>
                <div className='itemPageRight'>
                    <img alt ='#' src={item.img} className='itemPageRightImg' ></img>
                </div>
            </div>
        </div>
    );
};

export default ItemPage;