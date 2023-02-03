import FormInput from './formInput';
import style from './form.module.css';
import validate from './validate';
import phoneInputMask from './phoneInputMask';
import { Component } from 'react';

class Form extends Component{
    state= {
        values: {
            name: '',
            surname: '',
            birthday: '',
            phone: '',
            website: '',
            about: '',
            techstack: '',
            lastProject: ''
        },
        
        form: [
            {title: 'Имя', name: 'name', value: '', placeholder: 'Иван', type: 'text', isValid: true, errorMessage: '' },
            {title: 'Фамилия', name: 'surname', value: '', placeholder: 'Иванов', type: 'text', isValid: true, errorMessage: ''},
            {title: 'Дата рождения', name: 'birthday', value: '', placeholder: '', type: 'date', isValid: true, errorMessage: ''},
            {title: 'Телефон', name: 'phone', value: '', placeholder: '777777777', type: 'tel', isValid: true, errorMessage: ''},
            {title: 'Сайт', name: 'website', value:'', placeholder: 'http://mysite.com', type: 'text', isValid: true, errorMessage: ''},
            {title: 'О себе', name: 'about', value: '', placeholder: 'Я Frontend разработчик', type: 'text', isValid: true, errorMessage: ''},
            {title: 'Стек технологий', name: 'techstack', value: '', placeholder: 'JavaScript...', type: 'text', isValid: true, errorMessage: ''},
            {title: 'Описание последнего проекта', name: 'lastProject', value: '', placeholder: 'Мы сделали...', type: 'text', isValid: true, errorMessage: ''}
        ],

    }


    onSaveState = (e) => {
        e.preventDefault()
        if (Object.values(this.state.values).some(element => !element)){
            alert('Не все поля заполнены')
        }
        if( this.state.form.some(element => !element.isValid)){
            alert('Не все поля заполнены верно')
        }

    }

    onChangeValid = (name, validate, errorMessage) => {
        this.setState(({form}) => {
            return form.map((elem) => {
                if (name === 'every') {
                    elem.isValid = true;
                    elem.errorMessage = '';
                }
                if(elem.name === name){
                    elem.isValid = validate;
                    elem.errorMessage = errorMessage
                }
                return elem;
            })
        })
    }

    onClearForm = (e) => {
        e.preventDefault();
        this.onChangeValid('every')
        this.setState(prevState => ({
            form: [...prevState.form],
            values:{
                name: '',
                surname: '',
                birthday: '',
                phone: '',
                website: '',
                about: '',
                techstack: '',
                lastProject: ''
            }
        }));
    }

    onChangeValue = (event) => {
        let {name, value} = event.target;


        if (name === 'phone') {
            value= value.replace(/[^\d]+$/,'')
            value = phoneInputMask(this.state.values, value);
        }
        const {isValid, errorMessage} = validate(name, value);
        this.onChangeValid(name, isValid, errorMessage)
        this.setState(prevState => ({
            form: [...prevState.form],
            values:{
                ...prevState.values,
                [name]: value
            }
        }));
    }
    render() {
        const {form, values} = this.state;
        return (
            <div className={style.container}>

                <form className={style.content}
                    onReset={this.onClearForm}
                    onSubmit={this.onSaveState}>
                    <h1 className={style.title}>Создание анкеты</h1>

                        <FormInput form={form} values={values} onChangeValue={this.onChangeValue}/>

                            
                    <div>
                        <button type='reset' className={style.btn} name='reset'>Отмена</button>
                        <button type='submit' className={style.btn} name='submit'>Сохранить</button>
                    </div>

                </form>
            </div>

        );
 }
}

export default Form;