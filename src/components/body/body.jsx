import React from 'react' 
import s from './body.module.css'
import Block from './block/block'




const Body =(props)=>{
    
    return (
        
            <div className={s.body}>
                <div className={s.maf}>
                    <div className={s.title1}>
                        <h2>Лучшие вакансии недели</h2>
                            </div>
                    <div className={s.title2}>
                        <h2>Вакансии, получившие больше всего откликов за неделю</h2>
                    </div>
                </div>
                <div className={s.block}>
                    <div ><Block/></div>
                    <div><Block/></div>

                    <div><Block/></div>

                    <div><Block/></div>

                    <div><Block/></div>

                    <div><Block/></div>

                    <div><Block/></div>

                    <div><Block/></div>

                    
                </div>
                <div className={s.bt}>
                    <button>Все компании</button>
                </div>
            </div>
           
            
       
    )
}

export default Body  