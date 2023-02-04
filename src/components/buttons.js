import { Component } from "react";
import styles from "./form.module.css";

class Buttons extends Component {
  render() {
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
  }
}

export default Buttons;
