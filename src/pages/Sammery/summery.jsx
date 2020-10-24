import Header from 'components/header/header'
import MakeSummery from 'components/MakeSummer/MakeSummer'
import Futter from 'components/footer/footer'
import React from 'react' 
import s from './summery.module.css'


const Summery =(props)=>{
    
    return (
        <div className={s.all}>
            <Header/>
            <MakeSummery/>
            <Futter/>
        
            
        </div>
       
    )
}

export default Summery  