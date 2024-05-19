import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import tcentr from '../../images/icons/tcentr.svg';
import c_1 from '../../images/icons/c_1.svg';
import c_2 from '../../images/icons/c_2.svg';
import t from '../../images/icons/t.svg';
import r from '../../images/icons/r.svg';
import o from '../../images/icons/0_1.svg';
import g from '../../images/icons/g.svg';
import i from '../../images/icons/i.svg';
import n from '../../images/icons/n.svg';
import o_2 from '../../images/icons/0_2.svg';
import geo_1 from '../../images/icons/geo_1.svg';
import geo_2 from '../../images/icons/geo_2.svg';
import tel from '../../images/icons/tel.svg';
const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerWrappper}>
        <div className={css.box_1}>
          <div className={css.letters}>
            <div className={css.lettersList}>
              <img
                className={`${css.lettersItems} ${css.itemsC_1}`}
                src={c_1}
                alt="C"
              />
              <img
                className={`${css.lettersItems} ${css.itemsC_2}`}
                src={c_2}
                alt="C"
              />
              <img
                className={`${css.lettersItems} ${css.itemsT}`}
                src={t}
                alt="T"
              />
              <img
                className={`${css.lettersItems} ${css.itemsR}`}
                src={r}
                alt="R"
              />
              <img
                className={`${css.lettersItems} ${css.itemsO_1}`}
                src={o}
                alt="O"
              />
              <img
                className={`${css.lettersItems} ${css.itemsG}`}
                src={g}
                alt="G"
              />
              <img
                className={`${css.lettersItems} ${css.itemsI}`}
                src={i}
                alt="I"
              />
              <img
                className={`${css.lettersItems} ${css.itemsN}`}
                src={n}
                alt="N"
              />
              <img
                className={`${css.lettersItems} ${css.itemsO_2}`}
                src={o_2}
                alt="O"
              />
              <img className={css.tcenter} src={tcentr} alt="Tcenter" />
            </div>
          </div>
          <div className={css.contacts}>
            <div className={css.katukou}>
              <img className={css.geo_1} src={geo_1} alt="Geo" />
              <img className={css.geo_2} src={geo_2} alt="Geo" />
              <p className={css.tel}>Маршала Катукова, д.8</p>
            </div>
            <div className={css.box_2}>
              <img className={css.telImg} src={tel} alt="Tel" />

              <a className={css.tel} href="tel:+7 (495) 750 05 00">
                +7 (495) 750 05 00
              </a>
            </div>
          </div>
          <button className={css.btn}>Заказать звонок</button>
        </div>
        <nav className={css.navigation}>
          <ul className={css.navigationList}>
            <li>
              <NavLink className={css.navigationItem} to="/">
                О центре
              </NavLink>
            </li>
            <li className={css.navigationItem}>Афиша</li>
            <li className={css.navigationItem}>Студии</li>
            <li className={css.navigationItem}>Расписание</li>
            <li className={css.navigationItem}>Пространства</li>
            <li className={css.navigationItem}>Абонементы</li>
            <li>
              <NavLink className={css.navigationItem} to="/organizers">
                Организаторам
              </NavLink>
            </li>

            <li>
              <NavLink className={css.navigationItem} to="/contacts">
                Контакты
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
