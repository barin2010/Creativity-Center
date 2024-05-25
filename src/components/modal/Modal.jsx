import css from './Modal.module.css';
import cross from '../../images/icons/crossModal.svg';

const Modal = ({ open, setOpen }) => {
  const handleModalClick = e => {
    e.stopPropagation();
  };
  return (
    <div onClick={() => setOpen(false)} className={css.modalBackground}>
      <div onClick={handleModalClick} className={css.modalActive}>
        <img
          onClick={() => setOpen(false)}
          className={css.modalCross}
          src={cross}
          alt="cross"
        />
        <p className={css.modalTitle}>Заказать звонок</p>
        <form className={css.form} action="">
          <input className={css.input} type="text" placeholder="Ваше имя" />
        </form>
        <form className={css.form} action="">
          <input className={css.input} type="text" placeholder="Ваш телефон" />
        </form>
        <div className={css.btnBox}>
          <button onClick={() => setOpen(false)} className={css.btn}>
            Отправить
          </button>
          <label className={css.label} htmlFor="agree">
            <input
              className={css.checkbox}
              type="checkbox"
              name=""
              id="agree"
            />
            Я согласен на обработку моих персональных данных
          </label>
        </div>
      </div>
    </div>
  );
};

export default Modal;
