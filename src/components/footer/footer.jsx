import React from 'react' 
import s from './footer.module.css'
import logo from './../../assets/images/logo.svg'
import vk from './../../assets/images/Vk.svg'
import fb from './../../assets/images/FBook.svg'
import ins from './../../assets/images/instogram.svg'
import te from './../../assets/images/Telegram.svg'
import tw from './../../assets/images/Tw.svg'
import app from './../../assets/images/app.svg'
import play from './../../assets/images/paly.png'




const Footer =(props)=>{
    
    return (
        <div className={s.all}>
            <div className={s.container}>
                <div className={s.info}>
                    <ul>
                        <li className = {s.head}>СКФУ работа   </li>
                        <li>О сервисе</li>
                        <li>Вакансии</li>
                    </ul>
                    <ul>
                        <li className = {s.head}>Помощъ</li>
                        <li>Для соискателя</li>
                        <li>Для работадателя</li>
                        <li>Служба поддержки</li>
                    </ul>
                    <ul>
                        <li className = {s.head}>Документы</li>
                        <li>Соглашение с пользователем</li>
                        <li>Правила оказания услуг</li>
                        <li>Наши партнеры</li>
                    </ul>
                </div>
                <div className={s.link}>
                    {/* <div><img src={logo} alt=""/></div> */}
                    <div>
                        <img src={ins} alt=""/>
                        <img src={fb} alt=""/>
                        <img src={tw} alt=""/>
                        <img src={vk} alt=""/>
                        <img src={te} alt=""/>
                    </div>
                    <div>
                        <img src={app} alt=""/>
                        <img src={play} alt=""/>
                    </div>
                </div>
            </div>
           
            </div>
       
    )
}                   

export default Footer  