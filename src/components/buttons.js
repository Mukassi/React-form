import styles from "./form.module.css";

const Buttons = () => {
  return (
    <div>
      <button type="reset" className={styles.btn} name="reset">
        Отмена
      </button>
      <button type="submit" className={styles.btn} name="submit">
        Сохранить
      </button>
    </div>
  );
};

export default Buttons;
