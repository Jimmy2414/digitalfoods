// import React from "react";
// import ButtonStyled from '../buttonLading/ButtonStyled'
// import s from '../../../styles/landigPage.module.css'
import React from "react";
import { Link } from "react-router-dom";
import s from '../../../styles/landigPage.module.css'
// export default function inicio(){
// return (
//   <div className={s.conteiner} >    

// <div >
   
// <  ButtonStyled/>

//   </div>
// </div>
  

// )
// }


export default function inicio(){
  return(
      <div className={s.conteiner}>

<div className={s.inter} >
      <h1>Bon Appetit!🍸 </h1>
      <h2>Premium Quality Recipes</h2>
  <div  className={s.letras}><Link to='/home'>
  <button className={s.buttonl}>Welcome!</button>

    </Link></div>
  

    </div>
      </div>
  )
}