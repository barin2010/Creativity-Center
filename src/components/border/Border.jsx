import React from 'react';
import css from './Border.module.css';
import c_1 from '../../images/icons/c_1.svg';
import c_2 from '../../images/icons/c_2.svg';
const Border = () => {
  return (
    <section className={css.border}>
      <div className="container">
        <div className={css.borderImages}>
          <img className={css.img_1} src={c_1} alt="C" />
          <img className={css.img_2} src={c_2} alt="C" />
        </div>
        <div className={css.boxTitle}>
          <h1 className={css.title}>Движение. Творчество. Рост.</h1>
        </div>
      </div>
    </section>
  );
};

export default Border;
