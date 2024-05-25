import React from 'react';
import css from './SportAdult.module.css';
import { sportsAdults } from 'helper/sportsAdults';

const Sport = () => {
  return (
    <ul className={css.sportAdultList}>
      {sportsAdults.map(sport => {
        return (
          <li key={sport.id} className={css.sportAdultItem}>
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
  );
};

export default Sport;
