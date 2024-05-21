import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './SportAdult.module.css';
import { sportsAdults } from 'helper/sportsAdults';
import arrow from '../../images/icons/arrow.svg';

const SportAdult = () => {
  return (
    <div className={css.sportAdult}>
      <div className="container">
        <div className={css.sportAdultWrapper}>
          <div className={css.sportAdultBox}>
            <NavLink to="/" className={css.sportAdultTitle}>
              Направления
            </NavLink>
            <img className={css.sportAdultArrow} src={arrow} alt="arrow" />
            <NavLink
              className={css.sportAdultTitle}
              to="/directions/for_adults"
            >
              Для взрослых
            </NavLink>

            <img className={css.sportAdultArrow} src={arrow} alt="arrow" />
            <p className={css.sportAdultActive}>Спорт</p>
          </div>
          <ul className={css.sportAdultList}>
            {sportsAdults.map(sport => {
              return (
                <li className={css.sportAdultItem}>
                  <img
                    className={css.sportAdultImg}
                    srcSet={`${sport.img.src1x}1x ${sport.img.src2x}2x`}
                    src={sport.img.src1x}
                    alt={sport.title_1}
                  />
                  <div className={css.sportAdultBoxAge}>
                    <p className={css.sportAdultAge}>18+</p>
                  </div>
                  <div className={css.sportAdultNameBox}>
                    <p className={css.sportAdultTextOne}>{sport.title_1}</p>
                    <p className={css.sportAdultTextTwo}>{sport.title_2}</p>
                  </div>
                  <button className={css.sportAdultBtn}>ПОДРОБНЕЕ</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SportAdult;
