import React from 'react';
import { useState } from 'react';

import css from './Poster.module.css';

import arrow_left from '../../images/icons/arrow_left.png';
import arrow_right from '../../images/icons/arrow_right.svg';
import { postersData } from './postersData';

const Poster = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex > 0 ? prevIndex - 1 : postersData.length - 4
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex < postersData.length - 4 ? prevIndex + 1 : 0
    );
  };

  const visiblePosters = postersData.slice(currentIndex, currentIndex + 4);
  if (visiblePosters.length < 4) {
    visiblePosters.push(...postersData.slice(0, 4 - visiblePosters.length));
  }

  const totalVisibleSteps = postersData.length - 4 + 1;
  const scrollPercentage = ((currentIndex + 1) / totalVisibleSteps) * 100;

  return (
    <section className={css.poster} id="poster">
      <h3 className={css.title}>Афиша</h3>
      <ul className={css.posterList} id="posterList">
        {visiblePosters.map(poster => {
          return (
            <li className={css.posterItem} key={poster.id}>
              <img
                className={css.posterImg}
                srcSet={`${poster.img.src1x} 1x, ${poster.img.src2x} 2x`}
                src={poster.img.src1x}
                alt="Poster"
              />
              <div className={css.adressBox}>
                <p className={css.adress}>{poster.adress}</p>
              </div>
              <div className={css.posterName}>
                <p className={css.posterAction}>{poster.speeches}</p>
                <p className={css.titleAction}>{poster.name}</p>
              </div>
              <div className={css.dateBox}>
                <p className={css.date}>{poster.date}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={css.boxMore}>
        <div className={css.skrollBar}>
          <div
            className={css.skrollBarActive}
            style={{ width: `${scrollPercentage}%` }}
            id="posterScrollbar"
          ></div>
        </div>
        <div className={css.moreImage}>
          <p className={css.more} onClick={handleNext}>
            Листать дальше
          </p>
          <div className={css.boxArrow}>
            <img
              className={css.arrow}
              src={arrow_left}
              alt="arrow"
              onClick={handlePrev}
            />
            <img
              className={css.arrow}
              src={arrow_right}
              alt="arrow"
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Poster;
