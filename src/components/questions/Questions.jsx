import React from 'react';
import css from './Questions.module.css';
import cross from '../../images/icons/cross.svg';

const Questions = () => {
  return (
    <section className={css.questions}>
      <div className="container">
        <div className={css.wrapper}>
          <h3 className={css.title}>Часто задаваемые вопросы</h3>
          <ul className={css.questionsList}>
            <li className={css.questionsItem}>
              <div className={css.questionsBox}>
                <p className={css.text}>
                  Как зарегистрироваться в Личном кабинете и пользоваться им
                </p>
                <div className={css.boxImg}>
                  <img className={css.across} src={cross} alt="cross" />
                </div>
              </div>
              <div>
                <p></p>
              </div>
            </li>
            <li className={css.questionsItem}>
              <div className={css.questionsBox}>
                <p className={css.text}>Какие типы услуг есть</p>
                <div className={css.boxImg}>
                  <img className={css.across} src={cross} alt="cross" />
                </div>
              </div>
              <div>
                <p></p>
              </div>
            </li>
            <li className={css.questionsItem}>
              <div className={css.questionsBox}>
                <p className={css.text}>Как записаться на пробное занятие</p>
                <div className={css.boxImg}>
                  <img className={css.across} src={cross} alt="cross" />
                </div>
              </div>
              <div>
                <p></p>
              </div>
            </li>
            <li className={css.questionsItem}>
              <div className={css.questionsBox}>
                <p className={css.text}>Как приобрести услугу</p>
                <div className={css.boxImg}>
                  <img className={css.across} src={cross} alt="cross" />
                </div>
              </div>
              <div>
                <p></p>
              </div>
            </li>
            <li className={css.questionsItem}>
              <div className={css.questionsBox}>
                <p className={css.text}>Какие способы оплаты</p>
                <div className={css.boxImg}>
                  <img className={css.across} src={cross} alt="cross" />
                </div>
              </div>
              <div>
                <p></p>
              </div>
            </li>
            <li className={css.questionsItem}>
              <div className={css.questionsBox}>
                <p className={css.text}>Как пользоваться магазином</p>
                <div className={css.boxImg}>
                  <img className={css.across} src={cross} alt="cross" />
                </div>
              </div>
              <div>
                <p></p>
              </div>
            </li>
            <li className={css.questionsItem}>
              <div className={css.questionsBox}>
                <p className={css.text}>Как пользоваться расписанием</p>
                <div className={css.boxImg}>
                  <img className={css.across} src={cross} alt="cross" />
                </div>
              </div>
              <div>
                <p></p>
              </div>
            </li>
            <li className={css.questionsItem}>
              <div className={css.questionsBox}>
                <p className={css.text}>
                  Как составить расписание и записаться на занятия
                </p>
                <div className={css.boxImg}>
                  <img className={css.across} src={cross} alt="cross" />
                </div>
              </div>
              <div>
                <p></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Questions;
