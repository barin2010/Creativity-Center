import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
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
import strLight from '../../images/footer/strLight.svg';
import vkLight from '../../images/footer/vkLight.png';
import tgLight from '../../images/footer/tgLight.png';
import g1Light from '../../images/footer/g1Light.png';
import g2Light from '../../images/footer/g2Light.svg';
import g3Light from '../../images/footer/g3Light.png';
import g4Light from '../../images/footer/g4Light.svg';
import g5Light from '../../images/footer/g5Light.svg';
import g6Light from '../../images/footer/g6Light.svg';
import g7Light from '../../images/footer/g7Light.svg';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <section className={isHomePage ? css.footer : css.footerOther}>
      <div className="container">
        <div className={css.footerWrapper}>
          <div className={css.footerBox}>
            <div className={css.strogino}>
              {isHomePage ? (
                <img className={css.stroginoImg} src={str} alt="strogino" />
              ) : (
                <img
                  className={css.stroginoImg}
                  src={strLight}
                  alt="strogino"
                />
              )}
              <p
                className={
                  isHomePage ? css.stroginoTsentr : css.stroginoTsentrLight
                }
              >
                © 2018 – 2022, Культурный центр
                <br /> «Строгино» – учреждение культуры
                <br />
                города Москва
              </p>
              <div
                className={isHomePage ? css.stroginoEye : css.stroginoEyeLight}
              >
                <img className={css.eyeImg} src={eye} alt="eye" />
                <p className={css.eyeText}>ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ</p>
              </div>
              <p
                className={
                  isHomePage ? css.stroginoWork : css.stroginoWorkLight
                }
              >
                <span>мы работаем</span> <br />с 10:00 до 22:00 без выходных
              </p>
              <div className={css.socialBox}>
                <a href="#!">
                  {isHomePage ? (
                    <img className={css.vk} src={vk} alt="vk" />
                  ) : (
                    <img className={css.vk} src={vkLight} alt="vk" />
                  )}
                </a>
                <a href="#!">
                  {isHomePage ? (
                    <img className={css.telegramm} src={tg} alt="telegram" />
                  ) : (
                    <img
                      className={css.telegramm}
                      src={tgLight}
                      alt="telegram"
                    />
                  )}
                </a>
              </div>
            </div>
            <div className={css.about}>
              <ul className={css.aboutList}>
                <li className={css.aboutItem}>
                  <a
                    className={isHomePage ? css.aboutLink : css.aboutLinkLight}
                    href="#!"
                  >
                    О центре
                  </a>
                </li>
                <li className={css.aboutItem}>
                  <a
                    className={isHomePage ? css.aboutLink : css.aboutLinkLight}
                    href="#!"
                  >
                    Пространства
                  </a>
                </li>
                <li className={css.aboutItem}>
                  <a
                    className={isHomePage ? css.aboutLink : css.aboutLinkLight}
                    href="#!"
                  >
                    Студии
                  </a>
                </li>
                <li className={css.aboutItem}>
                  <a
                    className={isHomePage ? css.aboutLink : css.aboutLinkLight}
                    href="#!"
                  >
                    Афиша
                  </a>
                </li>
                <li className={css.aboutItem}>
                  <a
                    className={isHomePage ? css.aboutLink : css.aboutLinkLight}
                    href="#!"
                  >
                    Галерея
                  </a>
                </li>
                <li className={css.aboutItem}>
                  <a
                    className={isHomePage ? css.aboutLink : css.aboutLinkLight}
                    href="#!"
                  >
                    Контакты
                  </a>
                </li>
                <li className={css.aboutItem}>
                  <a
                    className={isHomePage ? css.aboutLink : css.aboutLinkLight}
                    href="#!"
                  >
                    Оплата на сайте
                  </a>
                </li>
                <li className={css.aboutItem}>
                  <a
                    className={isHomePage ? css.aboutLink : css.aboutLinkLight}
                    href="#!"
                  >
                    Партнеры
                  </a>
                </li>
              </ul>
            </div>
            <div className={css.document}>
              <ul className={css.documentList}>
                <li className={css.documentItem}>
                  <a
                    className={isHomePage ? css.aboutLink : css.aboutLinkLight}
                    href="#!"
                  >
                    Документы
                  </a>
                </li>
                <li className={css.documentItem}>
                  <NavLink
                    to="/vacansies"
                    className={isHomePage ? css.aboutLink : css.aboutLinkLight}
                  >
                    Вакансии
                  </NavLink>
                </li>
                <li className={css.documentItem}>
                  <a
                    className={isHomePage ? css.aboutLink : css.aboutLinkLight}
                    href="#!"
                  >
                    Запись к директору
                  </a>
                </li>
                <li className={css.documentItem}>
                  <a
                    className={isHomePage ? css.aboutLink : css.aboutLinkLight}
                    href="#!"
                  >
                    Независимая оценка
                  </a>
                </li>
                <li className={css.documentItem}>
                  <a
                    className={isHomePage ? css.aboutLink : css.aboutLinkLight}
                    href="#!"
                  >
                    Раздел «Услуги и сервисы» на MOS.RU
                  </a>
                </li>
                <li className={css.documentItem}>
                  <a
                    className={isHomePage ? css.aboutLink : css.aboutLinkLight}
                    href="#!"
                  >
                    Все новости
                  </a>
                </li>
                <li className={css.documentItem}>
                  <a
                    className={isHomePage ? css.aboutLink : css.aboutLinkLight}
                    href="#!"
                  >
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
                <form>
                  <textarea
                    className={css.formInputArea}
                    type="textarea"
                    placeholder="Ваше сообщение"
                    rows="10"
                    cols="45"
                  />
                </form>
              </form>
              <div className={css.checkbox}>
                <label
                  className={
                    isHomePage ? css.checkboxText : css.checkboxTextLight
                  }
                >
                  <input className={css.checkboxInput} type="checkbox" />Я
                  согласен на обработку моих персональных данных
                </label>
              </div>
              <button className={css.btn} type="button">
                Отправить
              </button>
            </div>
          </div>
          <div className={css.partners}>
            <p
              className={
                isHomePage ? css.partnersTitle : css.partnersTitleLight
              }
            >
              Наши партнеры
            </p>
            <ul className={css.partnersList}>
              <li className={css.partnersItem}>
                {isHomePage ? (
                  <img className={css.partnersIcon} src={g1} alt="#" />
                ) : (
                  <img className={css.partnersIcon} src={g1Light} alt="#" />
                )}
              </li>
              <li className={css.partnersItem}>
                {isHomePage ? (
                  <img className={css.partnersIcon} src={g2} alt="#" />
                ) : (
                  <img className={css.partnersIcon} src={g2Light} alt="#" />
                )}
              </li>
              <li className={css.partnersItem}>
                {isHomePage ? (
                  <img className={css.partnersIcon} src={g3} alt="#" />
                ) : (
                  <img className={css.partnersIcon} src={g3Light} alt="#" />
                )}
              </li>
              <li className={css.partnersItem}>
                {isHomePage ? (
                  <img className={css.partnersIcon} src={g4} alt="#" />
                ) : (
                  <img className={css.partnersIcon} src={g4Light} alt="#" />
                )}
              </li>
              <li className={css.partnersItem}>
                {isHomePage ? (
                  <img className={css.partnersIcon} src={g5} alt="#" />
                ) : (
                  <img className={css.partnersIcon} src={g5Light} alt="#" />
                )}
              </li>
              <li className={css.partnersItem}>
                {isHomePage ? (
                  <img className={css.partnersIcon} src={g6} alt="#" />
                ) : (
                  <img className={css.partnersIcon} src={g6Light} alt="#" />
                )}
              </li>
              <li className={css.partnersItem}>
                {isHomePage ? (
                  <img className={css.partnersIcon} src={g7} alt="#" />
                ) : (
                  <img className={css.partnersIcon} src={g7Light} alt="#" />
                )}
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
