const validate = (name, inputValue) => {
  let value = inputValue.trim();
  const regularExpressions = {
    name: {
      regex: /^[A-ZА-ЯЁ]/g,
      errorMessage: "Первый символ должен быть заглавной буквой",
    },
    surname: {
      regex: /^[A-ZА-ЯЁ]/g,
      errorMessage: "Первый символ должен быть заглавной буквой",
    },
    website: {
      regex: /^https:\/\/.*/g,
      errorMessage: "Адрес сайта должен начинаться с https://",
    },
  };
  if (value === "") {
    return {
      isValid: false,
      errorMessage: "Поле пустое. Запоните пожалуйста",
    };
  }
  if (name === "phone" && value.replaceAll("-", "").length > 9) {
    console.log(value.replaceAll("-", ""))
    return {
      isValid: false,
      errorMessage: "Номер телефона должен состоять максимум из 9 цифр",
    };
  }
  if (name === "birthday") {
    const [year, month, day] = value.split("-");
    const dateNow = new Date();
    if (
      year < 1900 ||
      (+year >= dateNow.getFullYear() &&
        +month >= dateNow.getMonth() + 1 &&
        +day > dateNow.getDate())
    ) {
      return {
        isValid: false,
        errorMessage: "Вы ввели неверные данные",
      };
    }
  } else if (
    regularExpressions[name] &&
    value.search(regularExpressions[name].regex) === -1
  ) {
    return {
      isValid: false,
      errorMessage: regularExpressions[name].errorMessage,
    };
  } else if (inputValue.length > 600) {
    return {
      isValid: false,
      errorMessage: "Превышен лимит символов в поле",
    };
  }
  return { isValid: true, errorMessage: "" };
};

export default validate;
