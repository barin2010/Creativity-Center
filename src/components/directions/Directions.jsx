import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Directions.module.css';
import maick_1x from '../../images/directions/maick_1x.png';
import maick_2x from '../../images/directions/maick_2x.png';
import maciel_1x from '../../images/directions/maciel_1x.png';
import maciel_2x from '../../images/directions/maciel_2x.png';

const Directions = () => {
  return (
    <section className={css.directions}>
      <div className="container">
        <div className={css.directionsWrapper}>
          <h3 className={css.directionsTitle}>Направления</h3>
          <div className={css.directionsMore}>
            <div className={css.directionsBox}>
              <img
                className={css.directionsImg}
                srcSet={`${maick_1x} ${maick_2x}`}
                src={maick_1x}
                alt="maick"
              />
              <div className={css.title}>
                <p className={css.text}>Для взрослых</p>
              </div>
              <NavLink to="/directions/for_adults">
                <button className={css.btn}>ПОДРОБНЕЕ</button>
              </NavLink>
              {/* <button className={css.btn}>ПОДРОБНЕЕ</button> */}
            </div>
            <div className={css.directionsBox}>
              <img
                className={css.directionsImg}
                srcSet={`${maciel_1x} ${maciel_2x}`}
                src={maciel_1x}
                alt="maciel"
              />
              <div className={css.title}>
                <p className={css.text}>Для детей</p>
              </div>
              <NavLink to="/directions/for_children">
                <button className={css.btn}>ПОДРОБНЕЕ</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directions;
