import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './SportAdult.module.css';

import arrow from '../../images/icons/arrow.svg';
import Sport from './Sport';

const SportAdult = () => {
  const titleAdult = `Для взрослых `;
  const linkAdult = '/directions/for_adults';
  return (
    <div className={css.sportAdult}>
      <div className="container">
        <div className={css.sportAdultWrapper}>
          <div className={css.sportAdultBox}>
            <NavLink to="/" className={css.sportAdultTitle}>
              Направления
            </NavLink>
            <img className={css.sportAdultArrow} src={arrow} alt="arrow" />
            <NavLink className={css.sportAdultTitle} to={linkAdult}>
              {titleAdult}
            </NavLink>

            <img className={css.sportAdultArrow} src={arrow} alt="arrow" />
            <p className={css.sportAdultActive}>Спорт</p>
          </div>
          <Sport />
        </div>
      </div>
    </div>
  );
};

export default SportAdult;
