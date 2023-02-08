import styles from "./form.module.css";

const SingleInput = ({ element, values, onChangeValue }) => {
  const { name, placeholder, type, isValid, errorMessage } = element;

  return (
    <>
      <input
        className={isValid ? styles.input : styles.inputError}
        value={values[name]}
        type={type}
        id={name}
        name={name}
        onChange={onChangeValue}
        placeholder={placeholder}
        autoComplete='off'
      />
      <div className={styles.hint}>{isValid ? "" : errorMessage}</div>
    </>
  );
};

export default SingleInput;
