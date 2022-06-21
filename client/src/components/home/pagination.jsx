import React from "react";
import { Link } from "react-router-dom";
import s from '../../styles/paginado.module.css'

export default function Paginadofn ({foodsPerPage ,  getFood , paginado, curretPage}) {
let pageNumbers = []
    for (let i = 0 ; i < Math.ceil(getFood/foodsPerPage) ; i++){
   pageNumbers.push(i+1)
}


if (curretPage === 1 )  {
    pageNumbers = pageNumbers.slice(curretPage - 1 , curretPage + 2 ) // corte de la 0 a la 4
}

if (curretPage > 1 && curretPage < Math.ceil(getFood/foodsPerPage) -1  ) {
    console.log(curretPage, ' page')
    // console.log(pageNumbers.slice(curretPage - 2 , curretPage + 1 ))
    // //9 - 12
    // // 8 - 11
    pageNumbers = pageNumbers.slice(curretPage - 2 , curretPage + 1 )

}
if ( curretPage === Math.ceil(getFood/foodsPerPage ) )  {
    console.log(curretPage, 'pageu')
    pageNumbers = pageNumbers.slice( Math.ceil(getFood/foodsPerPage) - 3 ,  Math.ceil(getFood/foodsPerPage) ) // corte 8 a la 12
}

if (curretPage === 11 )  {
    pageNumbers = pageNumbers.slice(Math.ceil(getFood/foodsPerPage) - 3 ,  Math.ceil(getFood/foodsPerPage) ) // corte de la 0 a la 4
}
console.log(pageNumbers)
return (
          
    
    <nav  >
      
     <ul className={s.paginado}>
     <button onClick={()=> paginado("start")}>⏮️</button>
                     <button onClick={()=> paginado("previus")}>🔙</button>
            {
                pageNumbers && pageNumbers.map(n => (
                 <li  key={n} >
                    
                    <button className={s.boton} onClick= {() => paginado(n)} >{n}</button>
                    </li>
                ))
                
            }
                   <button onClick={()=> paginado("next")}>🔜</button>
                     <button onClick={()=> paginado("finish")}>⏭️</button>
        </ul>
 
    </nav>
            
)
}