import { connect } from "react-redux";
import s from '../../styles/home.module.css'
import { Link } from "react-router-dom";
export default function Card({name, score, image, id, diets, Dish, Steps}) {
      
    return (

            <div className={s.cardbody}>
             
             <Link className={s.titulo} to={'/recipes/' + id} >
            <img className={s.image}  src={image} alt="not found" />

            <p className={s.titulo}>Name: {name}</p>
        
            {/* <p >Score: {score}</p> */}
            <ul>Type Diet:➤ {(diets)?.join(', ➤ ')} </ul>
            <p>Dish Type: {Dish}</p>
            </Link>
            {/* <p>Id: {id}</p>
             */}
            </div>
    )}  
        
