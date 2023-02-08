const validate = (name, inputValue) => {
  let value = inputValue.trim();
  let isValidValue;
  let message;

  const validationValue = {
    name: {
      validation: (value) => value.search(/^[A-ZА-ЯЁ]/g) === -1,
      errorMessage: "Первый символ должен быть заглавной буквой",
    },
    surname: {
      validation: (value) => value.search(/^[A-ZА-ЯЁ]/g) === -1,
      errorMessage: "Первый символ должен быть заглавной буквой",
    },
    website: {
      validation: (value) => value.search(/^https:\/\/.*/g) === -1,
      errorMessage: "Адрес сайта должен начинаться с https://",
    },
    phone: {
      validation: (value) => value.replaceAll("-", "").length > 9,
      errorMessage: "Номер телефона должен состоять максимум из 9 цифр",
    },
    birthday: {
      validation: (value) => {
        const [year, month, day] = value.split("-");
        const dateNow = new Date();
        return (
          year < 1900 ||
          (+year >= dateNow.getFullYear() &&
            +month >= dateNow.getMonth() + 1 &&
            +day > dateNow.getDate())
        );
      },
      errorMessage: "Вы ввели неверные данные",
    },
  };

  if (validationValue[name]) {
    isValidValue = validationValue[name].validation(value);
    message = isValidValue ? validationValue[name].errorMessage : "";
  } else {
    isValidValue = inputValue.length > 600;
    message = isValidValue ? "Превышен лимит символов в поле" : "";
  }

  if (value === "") {
    isValidValue = true;
    message = "Поле пустое. Запоните пожалуйста";
  }

  return { isValid: !isValidValue, errorMessage: message };
};

export default validate;
