import React from 'react'
import s from './MakeSummer.module.css'
import { Form, Field } from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const MakeSummery = () => (
  <div className = {s.sama }>
    <h1>Создание резюме </h1>
    <div className={s.sam}>
        <Form
        onSubmit={onSubmit}
        initialValues={{ stooge: 'larry', employed: false }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form  className = {s.container}onSubmit={handleSubmit}>
            <div className={s.fg}>
                <label className={s.qwer}>Желаемая должность</label>
                <Field
                name="work"
                component="input"
                type="text"
                placeholder="Js разработчик"
                className = {s.form}
                />
            </div>
            <div className={s.fg}>
                <label className={s.qwer}>Имя</label>
                <Field
                name="имя"
                component="input"
                type="text"
                placeholder="Фарид"
                className = {s.form}
                />
            </div>
            <div className={s.fg}>
                <label className={s.qwer}>Фамилия</label>
                <Field className = {s.form} name="Фамилия" component="input" type="text" placeholder="Гасанов"/>
            </div>
            <div className={s.fg}>
                <label className={s.qwer}>Возраст</label>
                <Field className = {s.form1} name="Возраст" component="input" type="text" placeholder="21 год"/>
            </div>
            <div className={s.fg}>
                <label className={s.qwer}>Пол</label>
                <Field className = {s.form7} name="Пол" component="input" type="radio" />
                <label className={s.qwer}>Мужской</label>
                
                <Field className = {s.form7} name="Пол" component="input" type="radio" placeholder="First Name"/>
                <label className={s.qwer}>Женский</label>
            </div>
            <div className={s.fg}>
                <label className={s.qwer}>Занятость</label>
                <Field className = {s.form7} name="Занятость" component="input" type="radio" placeholder="First Name"/>
                <label className={s.qwer}>Полный рабочий день</label>
                
                <Field className = {s.form7} name="Пол" component="input" type="radio" placeholder="First Name"/>
                <label className={s.qwer}>Не полный рабочий день</label>
            </div>
            <div className={s.fg}>
                <label className={s.qwer} >О себе</label>
                <Field className = {s.form2} name ="О себе" component="input" type ="text" placeholder="Умение расставлять приоритеты. Умение
работать в команде. и т.д."/>
            </div>
            <div className={s.fg}>
                <label className={s.qwer} >Образование</label>
                <Field className = {s.form6} name ="Образование" component="input" type ="text" placeholder="Дагестанский государсвенный университет"/>
            </div>
            <div className={s.fg}>
                <label  className={s.qwer} >Ключевые навоки</label>
                <Field className = {s.form6} name ="Ключевые навоки" component="input" type ="text" placeholder="IT - студия N"/>
            </div>
            <div className={s.fg}>
                <label className={s.qwer}>Опыт работы</label>
                <Field className = {s.form6} name ="Опыт работы" component="input" type ="text" placeholder="Опишите подробнее по подробнее про ваш последний
 опыт работы"/>
            </div>
            <div className={s.fg}>
                <label className={s.qwer}>Зарплата</label>
                <Field className = {s.form} name ="Зарплата" component="input" type ="text" placeholder="От"/>
                <Field className = {s.form} name ="Зарплата" component="input" type ="text" placeholder="До"/>
            </div>
            <div className={s.fg}>
                <label className={s.qwer}>Достижения</label>
                <Field className = {s.form6} name ="Достижения" component="input" type ="text" placeholder="Какие у вас имеются сертификаты , участие в различных
конкурсах и т.д."/>
            </div>
            <div className={s.fg}>
                <label className={s.qwer}>Контактная информация</label>
                <Field className = {s.form5} name ="Контактная информация" component="input" type ="text" placeholder="example@gmail.com"/>
            </div>
            <div className={s.fg}>
                <label className={s.qwer}>Дополнительные навыки</label>
                <Field className = {s.form6} name ="Дополнительные навыки" component="input" type ="text" placeholder="Дополнительные навыки которыми вы обладаете"/>
            </div>
            <div className={s.fg}>
                <label className={s.qwer} >Личные качества</label>
                <Field className = {s.form6} name ="Личные качества" component="input" type ="text" placeholder="Дополнительные навыки которыми вы обладаете"/>
            </div>
            <div className={s.fg}>
                <label className={s.qwer}>Владение языками</label>
                <Field className = {s.form6} name ="Личные качества" component="input" type ="text" placeholder="Опишите какие языки вы знаете"/>
            </div>
            <div className={s.fg}>
                <label className={s.qwer}>Опыт волонтерской или общественной деятельности</label>
                <Field className = {s.form6} name ="Опыт волонтерской или общественной деятельности" component="input" type ="text" placeholder="Студенческий специализированный 
волонтерский отряд СКФУ
«Особый
взгляд», командир отряда"/>
            </div>
            
            <button
                className="registration__submit"
                
                >
                Опубликовать
                </button>
            
            </form>
        
      )}
    />
    </div>
  </div>
)

export default MakeSummery
