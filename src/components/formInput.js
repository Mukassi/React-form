import { Fragment } from "react";
import styles from "./form.module.css";
import MultiInput from "./multiInput";
import SingleInput from "./singelInput";

const FormInput = ({ form, values, onChangeValue }) => {
  return (
    <>
      <h1 className={styles.title}>Создание анкеты</h1>
      {form.map((element) => {
        const { name, title, multiInput } = element;
        return (
          <Fragment key={name}>
            <label className={styles.label} htmlFor={name}>
              {title}
            </label>
            {multiInput ? (
              <MultiInput
                element={element}
                values={values}
                onChangeValue={onChangeValue}
              />
            ) : (
              <SingleInput
                element={element}
                values={values}
                onChangeValue={onChangeValue}
              />
            )}
          </Fragment>
        );
      })}
    </>
  );
};

export default FormInput;
