import React from 'react';
import s from './trust.module.css'
import mts from './../../assets/images/mtc.jpg'
import bel from './../../assets/images/biline.jpg'
import tin from './../../assets/images/TimkOff.jpg'
import sbe from './../../assets/images/sper.jpg'
import meg from './../../assets/images/magafon.jpg'
import yan from './../../assets/images/херня.jpg'
import yot from './../../assets/images/шпроты.jpg'
import mai from './../../assets/images/мыло.jpg'
import epa from './../../assets/images/Epam.jpg'
import vib from './../../assets/images/viber.jpg'




const Trust = () => {
  return (
    <div className={s.main}>
     <div className={s.title}>
         <h2>Нам доверяют</h2>
         <p>регулярно размещают  наших студентов </p>
     </div>
     <div className={s.company}>
         <div className={s.top}>
             <div className={s.cont}> <img src={mts}/> <p>16 Вакансий</p></div>
             <div className={s.cont}> <img src={bel}/> <p>16 Вакансий</p></div>
             <div className={s.cont}> <img src={tin}/> <p>16 Вакансий</p></div>
             <div className={s.cont}> <img src={sbe}/> <p>16 Вакансий</p></div>
             <div className={s.cont}> <img src={meg}/> <p>16 Вакансий</p></div>
         </div></div>
    <div className={s.company}>   
         <div className={s.butt}>
             <div className={s.cont}> <img src={yan}/> <p>16 Вакансий</p></div>
             <div className={s.cont}> <img src={yot}/> <p>16 Вакансий</p></div>
             <div className={s.cont}> <img src={mai}/> <p>16 Вакансий</p></div>
             <div className={s.cont}> <img src={epa}/> <p>16 Вакансий</p></div>
             <div className={s.cont}> <img src={vib}/> <p>16 Вакансий</p></div>
         </div>
     </div >
     <div className={s.btn}><button >Все компании</button></div>
    </div>
  );
};

export default Trust;