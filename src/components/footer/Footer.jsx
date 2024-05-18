import React from 'react';
import css from './Footer.module.css';
import str from '../../images/icons/strogino.svg';
import eye from '../../images/icons/eye.svg';
import vk from '../../images/icons/vk.png';
import tg from '../../images/icons/tg.png';
import g1 from '../../images/footer/g1.png';
import g2 from '../../images/footer/g2.png';
import g3 from '../../images/footer/g3.png';
import g4 from '../../images/footer/g4.svg';
import g5 from '../../images/footer/g5.svg';
import g6 from '../../images/footer/g6.svg';
import g7 from '../../images/footer/g7.svg';
import GooglePay from '../../images/icons/GooglePay.png';
import AppStore from '../../images/icons/AppStore.png';

const Footer = () => {
  return (
    <section className={css.footer}>
      <div className="container">
        <div className={css.footerWrapper}>
          <div className={css.footerBox}>
            <div className={css.strogino}>
              <img className={css.stroginoImg} src={str} alt="strogino" />
              <p className={css.stroginoTsentr}>
                © 2018 – 2022, Культурный центр
                <br /> «Строгино» – учреждение культуры
                <br />
                города Москва
              </p>
              <div className={css.stroginoEye}>
                <img className={css.eyeImg} src={eye} alt="eye" />
                <p className={css.eyeText}>ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ</p>
              </div>
              <p className={css.stroginoWork}>
                <span>мы работаем</span> <br />с 10:00 до 22:00 без выходных
              </p>
              <div className={css.socialBox}>
                <a href="#!">
                  <img className={css.vk} src={vk} alt="vk" />
                </a>
                <a href="#!">
                  <img className={css.telegramm} src={tg} alt="telegram" />
                </a>
              </div>
            </div>
            <div className={css.about}>
              <ul className={css.aboutList}>
                <li className={css.aboutItem}>
                  <a className={css.aboutLink} href="#!">
                    О центре
                  </a>
                </li>
                <li className={css.aboutItem}>
                  <a className={css.aboutLink} href="#!">
                    Пространства
                  </a>
                </li>
                <li className={css.aboutItem}>
                  <a className={css.aboutLink} href="#!">
                    Студии
                  </a>
                </li>
                <li className={css.aboutItem}>
                  <a className={css.aboutLink} href="#!">
                    Афиша
                  </a>
                </li>
                <li className={css.aboutItem}>
                  <a className={css.aboutLink} href="#!">
                    Галерея
                  </a>
                </li>
                <li className={css.aboutItem}>
                  <a className={css.aboutLink} href="#!">
                    Контакты
                  </a>
                </li>
                <li className={css.aboutItem}>
                  <a className={css.aboutLink} href="#!">
                    Оплата на сайте
                  </a>
                </li>
                <li className={css.aboutItem}>
                  <a className={css.aboutLink} href="#!">
                    Партнеры
                  </a>
                </li>
              </ul>
            </div>
            <div className={css.document}>
              <ul className={css.documentList}>
                <li className={css.documentItem}>
                  <a className={css.aboutLink} href="#!">
                    Документы
                  </a>
                </li>
                <li className={css.documentItem}>
                  <a className={css.aboutLink} href="#!">
                    Вакансии
                  </a>
                </li>
                <li className={css.documentItem}>
                  <a className={css.aboutLink} href="#!">
                    Запись к директору
                  </a>
                </li>
                <li className={css.documentItem}>
                  <a className={css.aboutLink} href="#!">
                    Независимая оценка
                  </a>
                </li>
                <li className={css.documentItem}>
                  <a className={css.aboutLink} href="#!">
                    Раздел «Услуги и сервисы» на MOS.RU
                  </a>
                </li>
                <li className={css.documentItem}>
                  <a className={css.aboutLink} href="#!">
                    Все новости
                  </a>
                </li>
                <li className={css.documentItem}>
                  <a className={css.aboutLink} href="#!">
                    Аренда помещений
                  </a>
                </li>
              </ul>
            </div>
            <div className={css.formBox}>
              <form className={css.form} action="">
                <p className={css.formTitle}>НАПИШИТЕ НАМ</p>
                <input
                  className={css.formInput}
                  type="text"
                  placeholder="Ваше имя"
                />
                <input
                  className={css.formInput}
                  type="text"
                  placeholder="Ваш телефон или email"
                />
                <input
                  className={css.formInputArea}
                  type="textarea"
                  placeholder="Ваше сообщение"
                  rows="10"
                  cols="45"
                />
              </form>
              <div className={css.checkbox}>
                <input
                  className={css.checkboxInput}
                  type="checkbox"
                  checked="checked"
                />
                <p className={css.checkboxText}>
                  Я согласен на обработку моих персональных данных
                </p>
              </div>
              <button className={css.btn} type="button">
                Отправить
              </button>
            </div>
          </div>
          <div className={css.partners}>
            <p className={css.partnersTitle}>Наши партнеры</p>
            <ul className={css.partnersList}>
              <li className={css.partnersItem}>
                <img className={css.partnersIcon} src={g1} alt="#" />
              </li>
              <li className={css.partnersItem}>
                <img className={css.partnersIcon} src={g2} alt="#" />
              </li>
              <li className={css.partnersItem}>
                <img className={css.partnersIcon} src={g3} alt="#" />
              </li>
              <li className={css.partnersItem}>
                <img className={css.partnersIcon} src={g4} alt="#" />
              </li>
              <li className={css.partnersItem}>
                <img className={css.partnersIcon} src={g5} alt="#" />
              </li>
              <li className={css.partnersItem}>
                <img className={css.partnersIcon} src={g6} alt="#" />
              </li>
              <li className={css.partnersItem}>
                <img className={css.partnersIcon} src={g7} alt="#" />
              </li>
            </ul>
            <div className={css.download}>
              <a href="#!">
                <img
                  className={css.downloadGoogle}
                  src={GooglePay}
                  alt="GooglePay"
                />
              </a>
              <a href="#!">
                <img
                  className={css.downloadApp}
                  src={AppStore}
                  alt="AppStore"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
