import React from 'react' 
import s from './block.module.css'




const Block =(props)=>{
    
    return (
        <div className={s.all}>
            <div className={s.head}>
                 <img src="http://placehold.it/34x50" />
                <div className={s.text}> <p>Стажёр-разработчик</p>
                <p>Fullstack Development</p>
                <p className={s.green}>От 25 000 до 50 000 ₽</p></div>  
            </div>
           
            </div>
       
    )
}

export default Block  