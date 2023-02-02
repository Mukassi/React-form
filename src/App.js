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
        lastProject:'',
        clear:false
    }

    handleSaveState = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    handleClearForm = (e) => {
        e.preventDefault();
        console.log('clear')
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
        return (
            <div className={style.container}>

                <form className={style.content}
                    onReset={this.handleClearForm}
                    onSubmit={this.handleSaveState}>
                    <h1 className={style.title}>Создание анкеты</h1>
                    <Form title='Имя' name='name' onHandleChange={this.handleChange} hint='Используя только латинские и кириллические буквы'/>
                    <Form title='Фамилия' name='surname' onHandleChange={this.handleChange} hint='Используя только латинские и кириллические буквы'/>
                    <Form title='Дата рождения' name='birthday' onHandleChange={this.handleChange} type='date'/>
                    <Form title='Телефон' name="phone" onHandleChange={this.handleChange} type='number' hint='В формате: 80000000000, 77000000000'/>
                    <Form title='Сайт' name='website' onHandleChange={this.handleChange}/>
                    <Form title='О себе' name='about' onHandleChange={this.handleChange}/>
                    <Form title='Стек технологий' name='techstack' onHandleChange={this.handleChange}/>
                    <Form title='Описание последнего проекта' name='lastProject' onHandleChange={this.handleChange}/>
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
