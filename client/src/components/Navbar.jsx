import React from "react";
import { useState } from "react";
import s from '../styles/Navbar.module.css';
import { Link } from "react-router-dom";
import { filterByOrder, orderByScore, getFilterByDiets } from "./actions/index";
import { useDispatch} from 'react-redux';
export default function Nabvar({typesAll,setCurrentPage, setOrder}){
    
    const dispatch = useDispatch();


    function handleFilterByDiets(evt){
        dispatch(getFilterByDiets(evt.target.value))
        setCurrentPage(1)
        setOrder(`${evt.target.value}`)
    }
   

    function handleFilterByOrder(evt){
        evt.preventDefault()
        dispatch(filterByOrder(evt.target.value))
        setCurrentPage(1)
        setOrder(`${evt.target.value}`)
    }
    function handleOrderByScore(evt){
        evt.preventDefault()
        dispatch(orderByScore(evt.target.value))
        setCurrentPage(1)
        setOrder(`${evt.target.value}`)
    }
   

    return (
        
        <div  className={s.nav}>
      
               
        <ul className={s.filtercontainer} >
        <Link to={'/'}>
            <li className={s.a}>Log Out 😢</li>
        </Link>
      
 
        <select className={s.filtros} defaultValue='Filter by Order' onChange={evt => handleFilterByOrder(evt)}>
                            <option >Filter by Order</option>
                            <option key= 'up' value = 'up'>Upward</option>
                            <option key= 'down' value = 'down'>Descendant</option>
                        </select>
                        <select className={s.filtros} defaultValue='Order by score' onChange={evt => handleOrderByScore(evt)}>
                            <option >Order by score</option>
                            <option key= 'SSc' value= 'SSc'>Spooncular Score</option>
                            <option key= 'HSc' value= 'HSc'>health Score</option>
                        </select>
                        <select className={s.filtros} defaultValue='Filter by type' onChange={evt => handleFilterByDiets(evt)}>
                            <option >Filter by type</option>
                            {typesAll?.map((type) => <option key={type.name} value={type.name}>{type.name}</option>)}
                        </select>  
                  
    
        </ul>
      
        <div className={s.divp}> <Link to="/create">
                    <button  className={s.add}>Add new recipe</button>
                </Link></div>
    </div> 
    )
}