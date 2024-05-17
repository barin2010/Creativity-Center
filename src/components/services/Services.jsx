import React from 'react';
import css from './Services.module.css';
import servis_1x from '../../images/servises/servises_1x.png';
import servis_2x from '../../images/servises/servises_2x.png';
import nik_1x from '../../images/servises/nik_1x.png';
import nik_2x from '../../images/servises/nik_2x.png';

const Services = () => {
  return (
    <section className={css.servises}>
      <div className="container">
        <div className={css.servisesWrapper}>
          <h3 className={css.servisesTitle}>Услуги и цены</h3>
          <div className={css.servisesMore}>
            <div className={css.servisesBox}>
              <img
                className={css.servisesImg}
                srcSet={`${servis_1x} ${servis_2x}`}
                src={servis_1x}
                alt="servis"
              />
              <div className={css.title}>
                <p className={css.text}>Для взрослых</p>
              </div>
              <button className={css.btn}>ПОДРОБНЕЕ</button>
            </div>
            <div className={css.servisesBox}>
              <img
                className={css.servisesImg}
                srcSet={`${nik_1x} ${nik_2x}`}
                src={nik_1x}
                alt="nik"
              />
              <div className={css.title}>
                <p className={css.text}>Для детей</p>
              </div>
              <button className={css.btn}>ПОДРОБНЕЕ</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
