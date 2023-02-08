import styles from "./form.module.css";

const Modal = ({ onCloseModal }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.modalClose} onClick={onCloseModal}>
          &times;
        </button>
        <div> Данные заполнены успешно</div>
      </div>
    </div>
  );
};

export default Modal;
