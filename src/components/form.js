import { Component } from 'react';
import styles from './form.module.css'


class Form extends Component {
    state = {
        value: '',
        isValid: false,
        errorMessage: ''
    }
    onHandleChange = (event) => {
        if(event.target.name === 'phone'){
            this.phoneFormat(this.state, event.target.value)

            console.log(event.target.value)
        }
        this.setState({value: event.target.value})
        this.props.onHandleChange(event);
        this.checkOnValidate(event.target.name, event.target.value)
    }
    phoneFormat = (state, value) => {
        const length = value.length;
        if (state.value.endsWith('-')) {
          return value;
        }
        if (length === 1 || length === 6 || length === 9) {
          value += '-';
        }
        return value;
      };

    checkOnValidate = (name, value) => {
        const regEx = {
                name: { 
                    regex: /^[а-яёa-z]+$/iu,
                    errorMessage: 'Введены некорректные данные',
                },
                surname: {
                    regex: /^[а-яёa-z]+$/iu,
                    errorMessage: 'Введены некорректные данные',
                },
                birthday: {
                regex: /^[0-9]{4}-[0-9]{2}-[0-9]{2}/g,
                errorMessage: 'Неверный формат даты',
                },
                phone: {
                    regex: /^[0-9]{1}-[0-9]{4}-[0-9]{2}-[0-9]{2}$/g,
                    errorMessage: 'Номер телефона должен содержать 9 цифр',
                }
            }
        if(name === 'name' || name === 'surname' || name === 'birthday' || name === 'phone') { 
            value.replace(regEx[name].regex, '') ? this.setState({isValid: true, errorMessage: regEx[name].errorMessage}) : this.setState({isValid: false, errorMessage: ''})
        }           
    }
    render(){
        const {value, isValid, errorMessage} = this.state
        const {title, name, type} = this.props;
        const formInput = name === 'techstack' || name === 'lastProject' || name === 'about';
        return(
            <>
                <label 
                    className={styles.label}
                    htmlFor={name}>{title}
                </label>

                { formInput ? 
                    <textarea 
                        className={styles.input}
                        name={name} 
                        id={name} 
                        rows="7" 
                        placeholder={title} 
                        value={value} 
                        onChange={this.onHandleChange}></textarea>
                    :
                    <input 
                        className={styles.input}
                        value={value}
                        type={type ? type : "text"} 
                        id= {name} 
                        name={name}
                        onChange={this.onHandleChange} 
                        placeholder={title}
                        required pattern="[0-9+()-]{7,20}"/>  
                }  
                {isValid ? <div>{errorMessage}</div> : null }
            </>
        )
    }
}

export default Form;

