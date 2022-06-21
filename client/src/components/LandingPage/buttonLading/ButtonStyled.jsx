import React from "react";
import { Link } from "react-router-dom";
import s from '../../../styles/landigPage.module.css'
export default function homeclick(){
    return(
        <div>

  <div className={ s.inter} >
        Bon Appetit
        </div>
    <div  className={s.letras}><Link to='/home'>
    <button className={s.buttonl}>Ingresá</button>

      </Link></div>
    
      <p>Premium Quality Recipes</p>
    
        </div>
    )
}