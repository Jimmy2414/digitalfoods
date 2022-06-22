import s from '../../styles/home.module.css'
import { Link } from "react-router-dom";
export default function Card({name,image, id, diets, Dish}) {
      
    return (

            <div className={s.cardbody}>
             
             <Link className={s.titulo} to={'/recipes/' + id} >
            <img className={s.image}  src={image} alt="https://th.bing.com/th/id/R.d596fbc8968a825555261372718a8f21?rik=8cFPnrL6bMrstQ&pid=ImgRaw&r=0" />

            <p className={s.titulo}>Name: {name}</p>
            <ul>Type Diet:➤ {(diets)?.join(', ➤ ')} </ul>
            <p>Dish Type: {Dish}</p>
            
            </Link>
           
            </div>
    )}  
        
