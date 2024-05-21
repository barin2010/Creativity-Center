import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './ForChildren.module.css';
import arrow from '../../images/icons/arrow.svg';
import { childrensData } from 'helper/childrensData';

const ForChildren = () => {
  return (
    <div className={css.forchildrens}>
      <div className="container">
        <div className={css.forchildrensWrapper}>
          <div className={css.childrensBox}>
            <NavLink to="/">
              <p className={css.childrensTitle}>Направления</p>
            </NavLink>

            <img className={css.childrensArrow} src={arrow} alt="arrow" />
            <p className={css.childrensText}>Для детей</p>
          </div>
          <ul className={css.adltsList}>
            {childrensData.map(children => {
              return (
                <li className={css.childrensItem} key={children.id}>
                  <img
                    className={css.childrensItemIng}
                    srcSet={`${children.img.src1x}1x ${children.img.src2x}2x`}
                    src={children.img.src1x}
                    alt={children.space}
                  />
                  <div className={css.imgBox}>
                    <img
                      className={css.childrensItemIcon}
                      src={children.icon}
                      alt="icon"
                    />
                  </div>
                  <p className={css.childrensItemName}>{children.space}</p>
                  <div className={css.childrenLink}>
                    <p className={css.childrenLinkText}>Подробнее</p>
                    <img
                      className={css.childrenLinkImg}
                      src={arrow}
                      alt="arrow"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ForChildren;
