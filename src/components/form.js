import { useState } from "react";
import Modal from "./modal";
import formDB from "./formDB";
import FullForm from "./fullForm";
import FormInput from "./formInput";
import styles from "./form.module.css";
import validate from "./utils/validate";
import phoneInputMask from "./utils/phoneInputMask";
import Buttons from "./buttons";

const initialValues = {
  name: "",
  surname: "",
  birthday: "",
  phone: "",
  website: "",
  about: "",
  techstack: "",
  lastProject: "",
};
const Form = () => {
  const [fullForm, setFullForm] = useState(false);
  const [values, setValues] = useState(initialValues);
  const [form, setForm] = useState(formDB);
  const [activeModal, setActiveModal] = useState(false);

  const onSaveForm = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    if (Object.values(values).some((element) => !element)) {
      const emptyNames = Object.keys(values).filter((key) => !values[key]);
      emptyNames.forEach((name) => {
        const { isValid, errorMessage } = validate(name, "");
        onChangeValid(name, isValid, errorMessage);
      });
      return alert("Не все поля заполнены");
    }
    if (form.some((element) => !element.isValid)) {
      return alert("Не все поля заполнены верно");
    }
    setActiveModal(true);
    setFullForm(true);
  };

  const onCloseModal = () => {
    setActiveModal(false);
  };
  
  const onChangeValid = (name, validate, errorMessage) => {
    setForm((form) => {
      return form.map((elem) => {
        if (name === "clear") {
          elem.isValid = true;
          elem.errorMessage = "";
        }
        if (elem.name === name) {
          elem.isValid = validate;
          elem.errorMessage = errorMessage;
        }
        return elem;
      });
    });
  };

  const onClearForm = (e) => {
    e.preventDefault();
    onChangeValid("clear");
    setValues(initialValues);
  };

  const onChangeValue = (event) => {
    let { name, value } = event.target;
    if (name === "phone") {
      value = value.replace(/[^\d]+$/, "");
      value = phoneInputMask(values, value);
      value = value.slice(0, 12);
    }
    const { isValid, errorMessage } = validate(name, value);

    onChangeValid(name, isValid, errorMessage);
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <form className={styles.content}>
        {!fullForm ? (
          <>
            <FormInput
              form={form}
              values={values}
              onChangeValue={onChangeValue}
            />
            <Buttons onClearForm={onClearForm} onSaveForm={onSaveForm} />
          </>
        ) : (
          <>
            {activeModal ? <Modal onCloseModal={onCloseModal} /> : null}
            <FullForm values={values} />
          </>
        )}
      </form>
    </div>
  );
};

export default Form;
