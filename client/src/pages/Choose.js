import React from 'react';
import Card from '../components/Card/Card.js';
import HeaderBackgrounde from '../components/HeaderBackgrounde/HeaderBackgrounde';
import backgrounde from '../img/kitchenbg.jpg';
import clasical from '../img/clasical.jpg';
import modernClassical from '../img/modernClassical.jpg';

import dt from '../img/DT.jpg';
import gracia from '../img/gracia.jpg';


const Choose = () => {
    const title1 = `'Фасад дерев'яний "ДТ"'`;
    const text1 = 'Класичний дизайн кухні неймовірно гнучкий і простий. Непідвладні часу функції, дрібні деталі та нейтральні колірні палітри гарантують, що зовнішній вигляд не буде ані надто вишуканим, ані надто знеособленим і все одно може відповідати різноманітним смакам, стилям і бюджетам. Незалежно від того, чи ви одягнені на вечерю в чорний костюм,сукню, чи просто в джинсах і футболці, класичний стиль кухні добре поєднується з повсякденним декором і екстраординарним декором.';
    const title2 = `'Фасад дерев'яний "Грація"'`;
    const text2 = 'Класичний дизайн кухні неймовірно гнучкий і простий. Непідвладні часу функції, дрібні деталі та нейтральні колірні палітри гарантують, що зовнішній вигляд не буде ані надто вишуканим, ані надто знеособленим і все одно може відповідати різноманітним смакам, стилям і бюджетам. Незалежно від того, чи ви одягнені на вечерю в чорний костюм,сукню, чи просто в джинсах і футболці, класичний стиль кухні добре поєднується з повсякденним декором і екстраординарним декором.';
    return (
        <div>
            <HeaderBackgrounde
                img={backgrounde}
                style={{ objectPosition: "0px -700px" }} />
            < Card fasad = {dt} title = {title1} text = {text1} example = {clasical} />
            < Card fasad = {gracia} title = {title2} text = {text2} example = {modernClassical} />
            < Card fasad = {dt} title = {title1} text = {text1} example = {clasical} />
            < Card fasad = {dt} title = {title1} text = {text1} example = {clasical} />

        </div>
    );
};

export default Choose;