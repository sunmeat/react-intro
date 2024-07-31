import React from 'react';
// import '../beauty/me.css'; // обычные стили
import avatar from '../images/me.jpg'; // импорт картинки
// import { containerStyle, headingStyle } from '../beauty/styles-as-js-objects'; // стили-объекты JS
// import '../beauty/class-name.css'; // стили для className
import '../beauty/card.css'; // в итоге, решил переделать внешний вид первого задания

const Alex = () => { // функциональный компонент
  return (
    <div className="business-card">
      <img src={avatar} alt="Моя фотография" />
      <div className="info">
        <h1>React - это просто сказка!</h1>
        <p className="paragraph">Загоруйко Александр Дмитриевич</p>
        <p className="paragraph">+38 063 03 000 35</p>
        <p className="paragraph">sunmeatrich@gmail.com</p>
      </div>
    </div>
  );
};

export default Alex;