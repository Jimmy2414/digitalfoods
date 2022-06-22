
import React from "react";
import { Link } from "react-router-dom";
import s from '../../styles/landigPage.module.css'

export default function inicio() {
  return (
    <div className={s.conteiner}>

      <div className={s.inter} >
        <h1>Bon Appetit!🍸 </h1>
        <h2>Premium Quality Recipes</h2>
        <div className={s.letras}><Link to='/home'>
        <button className={s.button}> Enter
</button>
        </Link></div>


      </div >
      <div className={s.footer}>Todos Los Derechos Reservados-By Juan Ignacio Muñoz 2022</div>
    </div>
  )
}