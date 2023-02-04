import { Component } from "react";
import FullForm from "./fullForm";
import FormInput from "./formInput";
import styles from "./form.module.css";
import validate from "./validate";
import phoneInputMask from "./phoneInputMask";
import Buttons from "./buttons";

class Form extends Component {
  state = {
    fullForm: false,
    values: {
      name: "",
      surname: "",
      birthday: "",
      phone: "",
      website: "",
      about: "",
      techstack: "",
      lastProject: "",
    },

    form: [
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
    ],
  };

  onSaveForm = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    if (Object.values(this.state.values).some((element) => !element)) {
      const emptyNames = Object.keys(this.state.values).filter(
        (key) => !this.state.values[key]
      );
      emptyNames.forEach((name) => {
        const { isValid, errorMessage } = validate(name, "");
        this.onChangeValid(name, isValid, errorMessage);
      });
      return alert("Не все поля заполнены");
    }
    if (this.state.form.some((element) => !element.isValid)) {
      return alert("Не все поля заполнены верно");
    }
    this.setState({ fullForm: true });
  };

  onChangeValid = (name, validate, errorMessage) => {
    this.setState(({ form }) => {
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

  onClearForm = (e) => {
    e.preventDefault();
    this.onChangeValid("clear");
    this.setState((prevState) => ({
      form: [...prevState.form],
      fullForm: false,
      values: {
        name: "",
        surname: "",
        birthday: "",
        phone: "",
        website: "",
        about: "",
        techstack: "",
        lastProject: "",
      },
    }));
  };

  onChangeValue = (event) => {
    let { name, value } = event.target;
    if (name === "phone") {
      value = value.replace(/[^\d]+$/, "");
      value = phoneInputMask(this.state.values, value);
    }
    const { isValid, errorMessage } = validate(name, value);
    this.onChangeValid(name, isValid, errorMessage);
    this.setState((prevState) => ({
      form: [...prevState.form],
      fullForm: false,
      values: {
        ...prevState.values,
        [name]: value,
      },
    }));
  };

  render() {
    const { form, values, fullForm } = this.state;
    return (
      <div className={styles.container}>
        <form
          className={styles.content}
          onReset={this.onClearForm}
          onSubmit={this.onSaveForm}
        >
          {!fullForm ? (
            <>
              <FormInput
                form={form}
                values={values}
                onChangeValue={this.onChangeValue}
              />
              <Buttons />
            </>
          ) : (
            <FullForm values={values} />
          )}
        </form>
      </div>
    );
  }
}

export default Form;
