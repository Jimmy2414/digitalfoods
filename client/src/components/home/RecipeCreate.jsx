import React,{useState, useEffect} from "react";
import{Link, useHistory } from 'react-router-dom';
import{getTypes, postRecipes} from '../actions/index';
import {useDispatch, useSelector, UseSelector} from 'react-redux';
import s from '../../styles/create.module.css'
export default function RecipeCreater(){
const history =useHistory()
    const dispatch= useDispatch()
    const recipes= useSelector((state)=>state.recipes)
    const type = useSelector((state) => state.types)     
    const [error, setError]= useState("")
   // let regExp = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/; // aquí va mi regExp
    function validateinputname(evt) {
        if(/\d/.test(evt.target.value)) {
          setError("No es una name");
        } else {
          setError('');
        }
        handleChange(evt);
      }

      function validateinputdish(evt) {
        if(/\d/.test(evt.target.value) && evt.target.value > 20 ) {
          setError("No es un texto");
        } else {
          setError('');
        }
        handleChange(evt);
      }
      function validateinputstep(evt) {
        if(/\d/.test(evt.target.value) && evt.target.value > 20 ) {
          setError("No es un texto1");
        } else {
          setError('');
        }
        handleChange(evt);
      }

      function validateinputnum(evt) {
        if(!/\d/.test(evt.target.value)) {
          setError("Los datos no son num");
        } else {
          setError('');
        }
        handleChange(evt);
      }
      function validateinputnum1(evt) {
        if(!/\d/.test(evt.target.value)) {
          setError("Los datos no son num1");
        } else {
          setError('');
        }
        handleChange(evt);
      }
      function validateinputurl(evt){
          if(!/^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/.test(evt.target.value) && !/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(evt.target.value)){
            setError("Los datos ingresados no son correctos url");
          }else {
            setError('');
      }
      handleChange(evt);
    }

    const [input, setInput] = useState({
        name:"",
        dish_summary:"",
        score:"",
        Healthy_food_level:"",
        Step_by_step:"",
        image:"",
        diets: []

    })
    useEffect(()=>{
        dispatch(getTypes());
    },[]);
    async function handleSubmit(evt){
        setInput({
            name:"",
            dish_summary:"",
            score:"",
            Healthy_food_level:"",
            Step_by_step:"",
            image:"",
            diets:[]
       
        })
        console.log(input.diets )
        if ( (input.name) && !/\d/.test(input.name) && (input.diets.length > 0) && input.Healthy_food_level <= 100  && input.dish_summary.length > 0){ 
           
            evt.preventDefault()
            dispatch(postRecipes(input))
            history.push('/home')
            return alert("Receta creada")
            console.log(input)
           
    }
    
    alert("Error, Faltan Datos en el Formulario")
        }
    async function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
    function handleSelect(evt){
        if(!input.diets.includes(evt.target.value)){
            setInput({
                ...input,
                diets: [...input.diets, evt.target.value]
            })
        }
       
    }
    function handleDelete(evt){
        setInput({
            ...input,
            diets: input.diets.filter(diet => diet !== evt)
        })
    
    }

    return (
        <div className={s.conteinercreate}>
            <Link className={s.volver} to='/home'>Volver ↩️</Link>
            <h1>Crea tu Receta</h1>
            <form className={s.form} onSubmit={handleSubmit} >
             
                    <label>Name:</label>
                    <input type="text" onChange={validateinputname}
                    value={input.name} 
                    name="name"
                    />
                    <div  className={s.span}>   {error !== "No es una name" ? null : <span>Ingresa un nombre para tu receta</span>}</div>
           
              
                <label>Dish_summary:</label>
                    <textarea className={s.textarea} rows="5" cols="50" type="text" onChange={validateinputdish}
                    
                    value={input.dish_summary} 
                    name="dish_summary"
                    />
                      {error !== "No es un texto"? null : <span className={s.span}>Ingresa un texto</span>}
             
             
                    <label>Healthy_food_level📶:{input.Healthy_food_level}</label>
                    <input type="range" min="1" max="100" id="slider" onChange={validateinputnum}
                    value={input.Healthy_food_level} 
                    name="Healthy_food_level"
                    />
                {error !== "Los datos no son num" ? null : <span className={s.span}>Ingresa un numero del 1 al 100</span>}
            
                    <label>Score📶:{input.score}</label>
                    <input type="range" min="1" max="100" onChange={validateinputnum1}
                    value={input.score} 
                    name="score"
                    />
              {error !=="Los datos no son num1" ? null : <span className={s.span}>Ingresa un numero del 1 al 100</span>}
                
                    <label>Step_by_step:</label>
                    <textarea className={s.textarea} rows="10" cols="50" type="text"onChange={validateinputstep}
                    value={input.Step_by_step} 
                    name="Step_by_step"
                    />
               {error !== "No es un texto1" ? null : <span className={s.span}>Ingresa un texto</span>}
               
                    <label>Image:</label>
                    <input type="text"onChange={validateinputurl}
                    value={input.image} 
                    name="image"
                    />
                    {error !== "Los datos ingresados no son correctos url" ? null : <span>Debes ingresar una url</span>}
                <select className={s.select} defaultValue='Diets' onChange={(evt) => handleSelect(evt)}>
                      <option  disabled>Diets</option>
                            {type?.map((type) => <option key={type.name} value={type.name}>{type.name}</option>)}
                       
                    </select>  
                     <input className={s.crear} disabled={!input.name ||  !input.dish_summary } type="submit" 
                value="Recipe Create✅"/>
                  
              
            </form>
            <div className={s.contenedor}>
                
                {input.diets.map(
                    (el, index) => <div className={s.option} key = {index}> <div  className={s.optionp}> <p >{el}</p>
                  <button onClick={() => handleDelete(el)}>❌</button></div> </div>)}
                
             </div>
              
        </div>
    )
}