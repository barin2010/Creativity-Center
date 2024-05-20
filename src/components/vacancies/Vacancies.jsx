import React from 'react';
import css from './Vacancies.module.css';
import Cc from '../../images/icons/Cc.svg';
import admin from '../../images/icons/admin.svg';
import phone from '../../images/icons/phone.svg';

const Vacancies = () => {
  return (
    <section className={css.vacansies}>
      <div className="container">
        <div className={css.vacansiesWrapper}>
          <div className={css.logoBox}>
            <img className={css.logoImg} src={Cc} alt="Logo" />
            <p className={css.vacansiesTitle}>ВАКАНСИИ</p>
          </div>

          <ul className={css.vacansiesList}>
            <li className={css.vacansiesItem}>
              <img className={css.vacansiesImg} src={admin} alt="admin" />
              <p className={css.vacansiesText}>Администратор</p>
            </li>
            <li className={css.vacansiesItem}>
              <img className={css.vacansiesImg} src={admin} alt="admin" />
              <p className={css.vacansiesText}>Сотрудник отдела продаж</p>
            </li>
          </ul>

          <div className={css.vacansiesTel}>
            <button className={css.vacansiesBtn}>Заказать звонок</button>
            <img className={css.vacansiesPhone} src={phone} alt="phone" />
            <a href="tel:+7(499) 229 99 55" className={css.vacansiesNumber}>
              +7(499) 229 99 55
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vacancies;
