import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './ForAdults.module.css';
import arrow from '../../images/icons/arrow.svg';
import { adultsData } from 'helper/adultsData';

const ForAdults = () => {
  return (
    <div className={css.forAdults}>
      <div className="container">
        <div className={css.forAdultsWrapper}>
          <div className={css.adultsBox}>
            <NavLink to="/">
              <p className={css.adultsTitle}>Направления</p>
            </NavLink>
            <img className={css.adultsArrow} src={arrow} alt="arrow" />
            <p className={css.adultsText}>Для взрослых</p>
          </div>
          <ul className={css.adltsList}>
            {adultsData.map((adult, id) => {
              return (
                <li className={css.adultsItem} key={adult.id}>
                  <img
                    className={css.adultsItemIng}
                    srcSet={`${adult.img.src1x}1x ${adult.img.src2x}2x`}
                    src={adult.img.src1x}
                    alt={adult.space}
                  />
                  <div className={css.imgBox}>
                    <img
                      className={css.adultsItemIcon}
                      src={adult.icon}
                      alt="icon"
                    />
                  </div>
                  <p className={css.adultsItemName}>{adult.space}</p>
                  <NavLink to={`/directions/for_adults/${adult.id}`}>
                    <div className={css.adultLink}>
                      <p className={css.adultLinkText}>Подробнее</p>
                      <img
                        className={css.adultLinkImg}
                        src={arrow}
                        alt="arrow"
                      />
                    </div>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ForAdults;
