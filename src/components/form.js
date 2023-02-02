import { Component } from 'react';
import styles from './form.module.css'


class Form extends Component {
    state = {
        value: '',
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
                    regex: /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){10}\d$/gm,
                    errorMessage: 'Номер телефона должен содержать 12 цифр',
                }
            }
        if(name === 'name' || name === 'surname' || name === 'birthday' || name === 'phone') { 
            value.replace(regEx[name].regex, '') ? this.setState({isValid: false, errorMessage: regEx[name].errorMessage}) : this.setState({isValid: true, errorMessage: ''})
        }           
    }
    render(){
        const {value, isValid, errorMessage} = this.state
        const {title, name, type, hint} = this.props;
        const formInput = name === 'techstack' || name === 'lastProject' || name === 'about';
        return(
            <>
                <label 
                    className={styles.label}
                    htmlFor={name}>{title}
                </label>

                { formInput ? 
                    <textarea 
                        className={isValid ? styles.input : styles.imputError}
                        name={name} 
                        id={name} 
                        rows="7" 
                        placeholder={title} 
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
                        placeholder={title}
                        />  
                }  
                <div className={styles.hint}>{errorMessage || hint}</div>
            </>
        )
    }
}

export default Form;

