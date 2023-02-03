const validate = (name, inputValue) => {
    let value = inputValue.trim()
    const regularExpressions = {
        name: { 
            regex: /^[A-ZА-ЯЁ]/g,
            errorMessage: 'Первый символ должен быть заглавной буквой'
        },
        surname: { 
            regex: /^[A-ZА-ЯЁ]/g,
            errorMessage: 'Первый символ должен быть заглавной буквой'
        },
        birthday: {
            regex: /^[0-9]{4}-[0-9]{2}-[0-9]{2}/g,
            errorMessage: 'Неверный формат даты'
        },
        phone: {
            regex: /^[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
            errorMessage: 'Номер телефона должен максимум из 9 цифр',
        },
        website: {
            regex: /^https:\/\/.*/g,
            errorMessage: 'Адрес сайта должен начинаться с https://'
    }
    }
    if(value === '') {
        return {
            isValid: false,
            errorMessage: 'Поле пустое. Запоните пожалуйста'
        }
    }
    if(name === 'birthday') {
        const [year, month, day] = value.split('-');
        console.log(typeof year)
        if (year < 1900) {
            return {
                isValid: false,
                errorMessage: 'Вы либо уже побили рекорд долгожителей, либо ввели неверные данные'
            }
        }
        if (+year >= 2023 && +month >= 2 && +day > 4) {
            return {
                isValid: false,
                errorMessage: 'Вы из будущего, либо ввели неверные данные'
            }
        }
    }
    if(regularExpressions[name] && value.search(regularExpressions[name].regex) === -1){
        return {
            isValid: false,
            errorMessage: regularExpressions[name].errorMessage
        }
    } else if (value.length > 600) {
        return {
            isValid: false,
            errorMessage: 'Превышен лимит символов в поле'
        }
    }
    return {isValid: true, errorMessage: ''}
}


export default validate;
