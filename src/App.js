import Form from './components/form';
import style from './App.module.css';
import { Component } from 'react';

class App extends Component{
    state= {
        name:'',
        surname:'',
        birthday:'',
        phone:'',
        website:'',
        about:'',
        techstack:'',
        lastProject:''
    }

    handleSaveState = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    handleClearForm = (e) => {
        e.preventDefault();
        this.setState({
            name:'',
            surname:'',
            birthday:'',
            phone:'',
            website:'',
            about:'',
            techstack:'',
            lastProject:''
        })
    }
    handleChange = (event) => {
        let {name, value} = event.target
        this.setState({[name]: value})
    }
    render() {
        const {name, surname, birthday, phone, website, about, techstack, lastProject} = this.state;
        return (
            <div className={style.container}>

                <form className={style.content}
                    onReset={this.handleClearForm}
                    onSubmit={this.handleSaveState}>
                    <h1 className={style.title}>Создание анкеты</h1>
                    <Form title='Имя' name='name' value={name} onHandleChange={this.handleChange} hint='Используя только латинские и кириллические буквы' placeholder='Иван'/>
                    <Form title='Фамилия' name='surname' value={surname} onHandleChange={this.handleChange} hint='Используя только латинские и кириллические буквы' placeholder='Иванов'/>
                    <Form title='Дата рождения' name='birthday' value={birthday} onHandleChange={this.handleChange} type='date'/>
                    <Form title='Телефон' name='phone' value={phone} onHandleChange={this.handleChange} type='number' hint='В формате: +48, 48, +375, 8, 7, +7 до 12 цифр' placeholder='880055535355'/>
                    <Form title='Сайт' name='website' value={website} onHandleChange={this.handleChange} hint='В формате: http://, https://, http://www.' placeholder='http://mysite.com'/>
                    <Form title='О себе' name='about' value={about}onHandleChange={this.handleChange} placeholder='Я Frontend разработчик'/>
                    <Form title='Стек технологий' name='techstack' value={techstack} onHandleChange={this.handleChange} placeholder='JavaScript...'/>
                    <Form title='Описание последнего проекта' name='lastProject' value={lastProject} onHandleChange={this.handleChange} placeholder='Мы сделали...'/>
                    <div>
                        <button type='reset' className={style.btn} name='reset'>Отмена</button>
                        <button type='submit' className={style.btn} name='submit'>Сохранить</button>
                    </div>

                </form>
            </div>

        );
 }
}

export default App;
