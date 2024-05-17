import React from 'react';
import css from './Poster.module.css';
import american_1 from '../../images/posters/americant_x1.png';
import american_2 from '../../images/posters/americant_x2.png';
import dance_1 from '../../images/posters/dance_x1.png';
import dance_2 from '../../images/posters/dance_x2.png';
import arrow_left from '../../images/icons/arrow_left.png';
import arrow_right from '../../images/icons/arrow_right.svg';
const Poster = () => {
  return (
    <section className={css.poster}>
      <h3 className={css.title}>Афиша</h3>
      <ul className={css.posterList}>
        <li className={css.posterItem}>
          <img
            className={css.posterImg}
            srcSet={`${american_1} ${american_2}`}
            src={american_1}
            alt="american"
          />
          <div className={css.adressBox}>
            <p className={css.adress}>ул. Маршала Катукова, д. 8</p>
          </div>
          <div className={css.posterName}>
            <p className={css.posterAction}>Летняя резиднция.</p>
            <p className={css.titleAction}>Детский концерт 8-10 лет</p>
          </div>
          <div className={css.dateBox}>
            <p className={css.date}>Смена: 20-24 августа</p>
          </div>
        </li>
        <li className={css.posterItem}>
          <img
            className={css.posterImg}
            srcSet={`${dance_1} ${dance_2}`}
            src={dance_1}
            alt="dance"
          />
          <div className={css.adressBox}>
            <p className={css.adress}>ул. Маршала Катукова, д. 8</p>
          </div>
          <div className={css.posterName}>
            <p className={css.posterAction}>Выступление</p>
            <p className={css.titleAction}>“ЛЕБЕДИНОЕ ОЗЕРО”</p>
          </div>
          <div className={css.dateBox}>
            <p className={css.date}>Смена: 20-24 августа</p>
          </div>
        </li>
        <li className={css.posterItem}>
          <img
            className={css.posterImg}
            srcSet={`${american_1} ${american_2}`}
            src={american_1}
            alt="american"
          />
          <div className={css.adressBox}>
            <p className={css.adress}>ул. Маршала Катукова, д. 8</p>
          </div>
          <div className={css.posterName}>
            <p className={css.posterAction}>Летняя резиднция.</p>
            <p className={css.titleAction}>“Детский концерт 8-10 лет”</p>
          </div>
          <div className={css.dateBox}>
            <p className={css.date}>Смена: 20-24 августа</p>
          </div>
        </li>
        <li className={css.posterItem}>
          <img
            className={css.posterImg}
            srcSet={`${dance_1} ${dance_2}`}
            src={dance_1}
            alt="dance"
          />
          <div className={css.adressBox}>
            <p className={css.adress}>ул. Маршала Катукова, д. 8</p>
          </div>
          <div className={css.posterName}>
            <p className={css.posterAction}>Выступление</p>
            <p className={css.titleAction}>“ЛЕБЕДИНОЕ ОЗЕРО”</p>
          </div>
          <div className={css.dateBox}>
            <p className={css.date}>Смена: 20-24 августа</p>
          </div>
        </li>
      </ul>
      <div className={css.boxMore}>
        <p className={css.more}>Листать дальше</p>
        <div className={css.boxArrow}>
          <img className={css.arrow} src={arrow_left} alt="arrow" />
          <img className={css.arrow} src={arrow_right} alt="arrow" />
        </div>
      </div>
    </section>
  );
};

export default Poster;
