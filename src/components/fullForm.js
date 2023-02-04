import { Component } from "react";
import styles from "./form.module.css";

class FullForm extends Component {
  render() {
    const {
      name,
      surname,
      birthday,
      phone,
      website,
      about,
      techstack,
      lastProject,
    } = this.props.values;
    return (
      <>
        <h1 className={styles.title}>{name + " " + surname}</h1>
        <ul className={styles.ul}>
          <li>Дата рождения: {birthday}</li>
          <li>Телефон: {phone}</li>
          <li>Вебсайт: {website}</li>
          <li>О себе: {about}</li>
          <li>Стек технологий: {techstack}</li>
          <li>Последний проект: {lastProject}</li>
        </ul>
      </>
    );
  }
}

export default FullForm;
