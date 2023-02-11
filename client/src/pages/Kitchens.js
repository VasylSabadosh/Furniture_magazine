import React from 'react';
import HeaderBackgrounde from '../components/HeaderBackgrounde/HeaderBackgrounde';
import backgrounde from '../img/kitchenbg.jpg';
import HeaderArticle from '../components/HeaderArticle/HeaderArticle.js';

const Kitchens = () => {
  return (
    <div>
      <HeaderBackgrounde
        img={backgrounde}
        style={{ objectPosition: "0px -700px" }} />
      <HeaderArticle
        style={{ color: "white", fontSize: '1rem', top: '30rem', left: "5%" }}
        text={'Шукаєш кухню своєї мрії? Ми допомагаємо втілити це в життя.'}
      />

    </div>
  );
};

export default Kitchens;