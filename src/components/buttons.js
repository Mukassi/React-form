import styles from "./form.module.css";

const Buttons = ({ onClearForm, onSaveForm }) => {
  return (
    <div>
      <button
        type="reset"
        className={styles.btn}
        name="reset"
        onClick={onClearForm}
      >
        Отмена
      </button>
      <button
        type="submit"
        className={styles.btn}
        name="submit"
        onClick={onSaveForm}
      >
        Сохранить
      </button>
    </div>
  );
};

export default Buttons;
