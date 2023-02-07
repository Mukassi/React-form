import { useState } from "react";
import FullForm from "./fullForm";
import FormInput from "./formInput";
import styles from "./form.module.css";
import validate from "./validate";
import phoneInputMask from "./phoneInputMask";
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
  const [form, setForm] = useState([
    {
      title: "Имя",
      name: "name",
      placeholder: "Иван",
      type: "text",
      isValid: true,
      errorMessage: "",
    },
    {
      title: "Фамилия",
      name: "surname",
      placeholder: "Иванов",
      type: "text",
      isValid: true,
      errorMessage: "",
    },
    {
      title: "Дата рождения",
      name: "birthday",
      placeholder: "",
      type: "date",
      isValid: true,
      errorMessage: "",
    },
    {
      title: "Телефон",
      name: "phone",
      placeholder: "7-7777-77-77",
      type: "tel",
      isValid: true,
      errorMessage: "",
    },
    {
      title: "Сайт",
      name: "website",
      placeholder: "https://mysite.com",
      type: "text",
      isValid: true,
      errorMessage: "",
    },
    {
      title: "О себе",
      name: "about",
      placeholder: "Я Frontend разработчик...",
      type: "text",
      isValid: true,
      errorMessage: "",
      multiInput: true,
    },
    {
      title: "Стек технологий",
      name: "techstack",
      placeholder: "JavaScript...",
      type: "text",
      isValid: true,
      errorMessage: "",
      multiInput: true,
    },
    {
      title: "Описание последнего проекта",
      name: "lastProject",
      placeholder: "Мы сделали...",
      type: "text",
      isValid: true,
      errorMessage: "",
      multiInput: true,
    },
  ]);

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
    setFullForm(true);
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
      <form
        className={styles.content}
        onReset={onClearForm}
        onSubmit={onSaveForm}
      >
        {!fullForm ? (
          <>
            <FormInput
              form={form}
              values={values}
              onChangeValue={onChangeValue}
            />
            <Buttons />
          </>
        ) : (
          <FullForm values={values} />
        )}
      </form>
    </div>
  );
};

export default Form;
