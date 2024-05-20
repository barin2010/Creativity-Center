import React from 'react';
import css from './Organizers.module.css';
import Cc from '../../images/icons/Cc.svg';
import folder from '../../images/icons/folder.svg';

const Organizers = () => {
  return (
    <div className={css.organizers}>
      <div className="container">
        <div className={css.organizersWrapper}>
          <div className={css.organizersBox}>
            <img className={css.organizersLogo} src={Cc} alt="Logo" />
            <p className={css.organizersTitle}>ДОГОВОР ОФЕРТЫ</p>
          </div>
          <ul className={css.organizersList}>
            <li className={css.organizersItem}>
              <img className={css.organizersFolder} src={folder} alt="folder" />
              <p className={css.organizersText}>Договор оферты 2023</p>
            </li>
            <li className={css.organizersItem}>
              <img className={css.organizersFolder} src={folder} alt="folder" />
              <p className={css.organizersText}>Договор оферты с 1.01.2024</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Organizers;
