import React, { useState } from 'react';

import css from './Questions.module.css';
import { questionsData } from 'helper/questionsData';
import cross from '../../images/icons/cross.svg';
import clouse from '../../images/icons/cross_1.svg';

const Questions = () => {
  const [openId, setOpenId] = useState([]);
  const toggleAnswer = id => {
    setOpenId(prevOpenId =>
      prevOpenId.includes(id)
        ? prevOpenId.filter(openId => openId !== id)
        : [...prevOpenId, id]
    );
  };
  return (
    <section className={css.questions}>
      <div className="container">
        <div className={css.wrapper}>
          <h3 className={css.title}>Часто задаваемые вопросы</h3>
          <ul className={css.questionsList}>
            {questionsData.map(({ question, id, answer }) => (
              <li key={id} className={css.questionsItem}>
                <div className={css.questionsBox}>
                  <p className={css.text}>{question}</p>
                  <div className={css.boxImg}>
                    {openId.includes(id) ? (
                      <img
                        onClick={() => toggleAnswer(id)}
                        className={css.across}
                        src={clouse}
                        alt="cross"
                      />
                    ) : (
                      <img
                        onClick={() => toggleAnswer(id)}
                        className={css.across}
                        src={cross}
                        alt="clouse"
                      />
                    )}
                  </div>
                </div>
                {openId.includes(id) && (
                  <div className={css.answerBox}>
                    <p className={css.answerText}>{answer}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Questions;
