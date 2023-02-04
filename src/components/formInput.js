import { Component, Fragment } from "react";
import styles from "./form.module.css";

class FormInput extends Component {
  render() {
    const { form, values, onChangeValue } = this.props;

    return (
      <>
        <h1 className={styles.title}>Создание анкеты</h1>
        {form.map((elem) => {
          const {
            name,
            title,
            placeholder,
            type,
            isValid,
            errorMessage,
            multiInput,
          } = elem;
          const length = 600 - values[name].length;
          return (
            <Fragment key={name}>
              <label className={styles.label} htmlFor={name}>
                {title}
              </label>

              {multiInput ? (
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
              ) : (
                <>
                  <input
                    className={isValid ? styles.input : styles.inputError}
                    value={values[name]}
                    type={type}
                    id={name}
                    name={name}
                    onChange={onChangeValue}
                    placeholder={placeholder}
                  />
                  <div className={styles.hint}>
                    {isValid ? "" : errorMessage}
                  </div>
                </>
              )}
            </Fragment>
          );
        })}
      </>
    );
  }
}

export default FormInput;
