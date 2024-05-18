import React from 'react';
import css from './Applications.module.css';
import iphone_x1 from '../../images/application/iPhone_x1.png';
import iphone_x2 from '../../images/application/iPhone_x2.png';
import application_x1 from '../../images/application/application_x1.png';
import application_x2 from '../../images/application/application_x2.png';
import GooglePay from '../../images/icons/GooglePay.png';
import AppStore from '../../images/icons/AppStore.png';

const Applications = () => {
  return (
    <section className={css.application}>
      <div className="container">
        <div className={css.applicationWrapper}>
          <div className={css.applicationMobile}>
            <h3 className={css.applicationTitle}>
              Скачайте приложение
              <br /> для посетителей
              <br /> КЦ “Строгино”
            </h3>

            <div className={css.wrapperImg}>
              <img
                className={css.applicationImg}
                src={GooglePay}
                alt="GooglePay"
              />
              <img
                className={css.applicationImg}
                src={AppStore}
                alt="AppStore"
              />
            </div>
          </div>
          <div className={css.background}>
            <div className={css.action}>
              <img
                className={css.actionGirl}
                srcSet={`${application_x1} ${application_x2}`}
                src={application_x1}
                alt="application"
              />
              <img
                className={css.actiomMobile}
                srcSet={`${iphone_x1} ${iphone_x2}`}
                src={iphone_x1}
                alt="iphone"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;
