import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { useEffect } from "react";
import {Link} from "react-router-dom"
import s from "../../styles/carddetail.module.css"

export default function Detail(props){
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getDetail(props.match.params.id));
        console.log(props.match.params.id)

    },[dispatch])
    const myFood = useSelector((state)=> state.detail)
    const diet= myFood.diets
const sinsummary=  "This recipe does not contain summary"
const sinsteps=  "This recipe does not contain steps"
    return (
        <div className={s.containergeneral}>
               
        {
        
            <div> 
                
                <h1 className={s.titulo}> {myFood.name}</h1>
               
                <img className={s.imagen} src={myFood.image} alt="img not found" />
                <Link to="/home">  <button className={s.boton}> Atrás ↩</button>  </Link>
<div className={s.text}>

    <h3>
        
Type Diets: <p>➤ {(diet)?.join(', ➤ ') }</p> </h3>

    <div>Summary: <p dangerouslySetInnerHTML={{ __html: myFood.summary? myFood.summary: 
 sinsummary}} />

<h3>Steps: <p>{ myFood.steps? myFood.steps: sinsteps }</p> </h3>  
<h3>Dish Type: {myFood.types? myFood.types:"Not contains types food"}</h3>
<h3>Score: {myFood.score}</h3>      
<h3>Healthy food: {myFood.healthScore} </h3>
</div>

</div>
            </div>

        }
       
        </div>
    )
}


