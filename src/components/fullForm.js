import styles from "./form.module.css";

const FullForm = ({ values }) => {
  const {
    name,
    surname,
    birthday,
    phone,
    website,
    about,
    techstack,
    lastProject,
  } = values;
  return (
    <>
      <h1 className={styles.title}>{name + " " + surname}</h1>
      <div className={styles.fullForm}>
        <p>Дата рождения: {birthday}</p>
        <p>Телефон: {phone}</p>
        <p>Вебсайт: {website}</p>
        <p>О себе: {about}</p>
        <p>Стек технологий: {techstack}</p>
        <p>Последний проект: {lastProject}</p>
      </div>
    </>
  );
};

export default FullForm;
