import styles from "./form.module.css";

const MultiInput = ({ element, values, onChangeValue }) => {
  const { name, placeholder, isValid, errorMessage } = element;
  const length = 600 - values[name].length;
  return (
    <>
      <textarea
        className={isValid ? styles.input : styles.inputError}
        name={name}
        id={name}
        rows="7"
        placeholder={placeholder}
        value={values[name]}
        onChange={onChangeValue}
      />
      <div className={styles.hint}>
        {isValid ? `Осталось ${length}/600 символов` : errorMessage}
      </div>
    </>
  );
};

export default MultiInput;
