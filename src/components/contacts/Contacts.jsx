import React from 'react';
import css from './Contacts.module.css';
import Cc from '../../images/contacts/Cc.svg';
import map_1x from '../../images/contacts/map_1x.png';
import map_2x from '../../images/contacts/map_2x.png';

const Contacts = () => {
  return (
    <section className={css.contacts}>
      <div className="container">
        <div className={css.contactsWrapper}>
          <div className={css.logoBox}>
            <img className={css.logoImg} src={Cc} alt="Logo" />
            <p className={css.contactsTitle}>КОНТАКТЫ</p>
          </div>

          <div className={css.katukov}>
            <div className={css.adress_1}>
              <p className={css.name}>Маршала Катукова, 8</p>
              <p className={css.adressName}>
                <span>Фактический адрес:</span> 123592,
                <br /> г. Москва, ул. Маршала Катукова, д. 8
              </p>
              <p className={css.adressName}>
                <span>Электронная почта:</span> info@stroginocc.ru
              </p>
              <p className={`${css.adressName} ${css.phone}`}>
                <span>Телефон:</span> +7 (495) 750-05-00
              </p>
              <p className={css.adressOff}>Договор публичной оферты</p>
            </div>
            <div className={css.adress_1}>
              <p className={css.boss}>Директор — Чеглов Артем Александрович</p>
              <div className={css.dayBox}>
                <p className={css.work}>Приемные дни: ПН/ВТ</p>
                <p className={css.workTime}>12:00 – 14:00</p>
              </div>
              <div className={css.contactsBox_2}>
                <div className={css.contactsTcentr}>
                  <p className={css.contactsTcentrTitle}>
                    Режим работы центра:
                  </p>
                </div>
                <div className={css.contactsTcentrWeek}>
                  <p className={css.contactsTcentrWeekTitle}>ПН/ВТ/ПТ </p>
                  <p className={css.contactsTcentrWeekTitle}>СР/ЧТ/СБ/ВС </p>
                </div>
                <div className={css.contactsTcentrWeek}>
                  <p className={css.contactsTcentrTime}>09:00 – 22:00</p>
                  <p className={css.contactsTcentrTime}>10.00 - 22.00 </p>
                </div>
              </div>
            </div>
          </div>
          <div className={css.requisites}>
            <div className={css.requisitesBox}>
              <p className={css.requisitesTitle}>Реквизиты:</p>
            </div>
            <div className={css.requisitesAdress}>
              <p className={css.requisitesDescription}>
                Государственное бюджетное учреждение культуры города Москвы
                "Культурный центр "Строгино" ИНН 7734115199/ОГРН 1037734017980
              </p>

              <p className={css.requisitesDescription}>
                Юридический адрес: 123592, г. Москва, вн. тер. г. муниципальный
                округ Строгино, ул. Маршала Катукова, д. 8 Телефон: +7 (495)
                750-05-00
              </p>
            </div>
          </div>
          <div className={css.rentBox}>
            <div className={`${css.rentQuestion} ${css.rentQuestion_1}`}>
              <p className={css.rentQuestionTitle}>По вопросам аренды:</p>
              <a className={css.rentBoxPhone} href="tel:+7 (495) 750-05-00">
                +7 (495) 750-05-00
              </a>
            </div>
            <div className={css.rentQuestion}>
              <p className={css.rentQuestionTitle}>
                По вопросам организации бесплатных/ городских мероприятий и
                кружков:
              </p>
              <a className={css.rentBoxPhone} href="tel:+7 (495) 750-05-00 ">
                +7 (495) 750-05-00
              </a>
            </div>
          </div>
          <div className={css.boxAdress}>
            <div className={css.boxAdressTitle}>
              <p className={css.boxAdressText}>Адреса:</p>
            </div>
            <ul className={css.adressList}>
              <li className={css.adressItem}>Маршала Катукова, 8</li>
              <li className={css.adressItem}>Твардовского, 23к3</li>
              <li className={css.adressItem}>Строгинский бульвар, 12</li>
            </ul>
            <ul className={css.adressList}>
              <li className={css.adressItem}>Маршала Катукова, 15к2</li>
              <li className={css.adressItem}>Маршала Катукова, 9к3</li>
              <li className={css.adressItem}>Исаковского, 6к1</li>
            </ul>
          </div>
          <img srcSet={`${map_1x} ${map_2x}`} src={map_1x} alt="map" />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
