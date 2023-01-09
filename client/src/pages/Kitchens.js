import React from 'react';
import HeaderBackgrounde from '../components/HeaderBackgrounde/HeaderBackgrounde';
import backgrounde from '../img/kitchenbg.jpg';
import HeaderArticle from '../components/HeaderArticle/HeaderArticle.js';
import Stage from '../components/Stage/Stage.js';
import styleImg from '../img/choose.jpg';
import projectImg from '../img/project.jpg';
import materialsImg from '../img/materials.jpg';
import accessoriesImg from '../img/accessories.jpeg';


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
      <div className='kitchens__stages'>
        <Stage img={styleImg} text={'Оберіть свій стиль'} link = {'choose'}/>
        <Stage img={projectImg} text={'напишіть дизайнеру'} link = {'write'}/>
        <Stage img={materialsImg} text={'ознайомтесь з матеріалами'} link = {'materials'} />
        <Stage img={accessoriesImg} text={'наповненя вашої кухні'} link = {'accessories'}/>
      </div>




    </div>
  );
};

export default Kitchens;