import { Component } from 'react';
import styles from './form.module.css'


class Form extends Component {
    state = {
        isValid: true,
        errorMessage: ''
    }
    onHandleChange = (event) => {
        this.setState({value: event.target.value})
        this.props.onHandleChange(event);
        this.checkOnValidate(event.target.name, event.target.value)
    }

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
                    regex: /^(?:(?:\+48|48|\+375|8|7|\+7)\d{1,11}|\d{1,12})$/gm,
                    errorMessage: 'Неверный формат телефона',
                },
                website: {
                    regex: /^(http:\/\/|https:\/\/)(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm,
                    errorMessage: 'Неверынй формат сайта'
                }
            }
        if(name === 'name' || name === 'surname' || name === 'birthday' || name === 'phone' || name === 'website') { 
            value.replace(regEx[name].regex, '') ? this.setState({isValid: false, errorMessage: regEx[name].errorMessage}) : this.setState({isValid: true, errorMessage: ''})
        }           
    }
    render(){
        const {isValid, errorMessage} = this.state
        const {title, name, type, hint, value, placeholder} = this.props;
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
                        placeholder={placeholder} 
                        value={value} 
                        onChange={this.onHandleChange}></textarea>
                    :
                    <input 
                        className={isValid ? styles.input : styles.inputError}
                        value={value}
                        type={type ? type : "text"} 
                        id= {name} 
                        name={name}
                        onChange={this.onHandleChange} 
                        placeholder={placeholder}
                        />  
                }  
                <div className={styles.hint}>{errorMessage || hint}</div>
            </>
        )
    }
}

export default Form;

