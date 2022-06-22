import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import { getTypes, postRecipes } from '../actions/index';
import { useDispatch, useSelector } from 'react-redux';
import s from '../../styles/create.module.css'
export default function RecipeCreater() {
  const history = useHistory()
  const dispatch = useDispatch()
  const type = useSelector((state) => state.types)
  const [error, setError] = useState("")
  function validateinputname(evt) {
    if (/\d/.test(evt.target.value)) {
      setError("No es una name");
    } else {
      setError('');
    }
    handleChange(evt);
  }

  function validateinputdish(evt) {
    if (/\d/.test(evt.target.value) && evt.target.value > 20) {
      setError("No es un texto");
    } else {
      setError('');
    }
    handleChange(evt);
  }
  function validateinputstep(evt) {
    if (/\d/.test(evt.target.value) && evt.target.value > 20) {
      setError("No es un texto1");
    } else {
      setError('');
    }
    handleChange(evt);
  }

  function validateinputnum(evt) {
    if (!/\d/.test(evt.target.value)) {
      setError("Los datos no son num");
    } else {
      setError('');
    }
    handleChange(evt);
  }
  function validateinputnum1(evt) {
    if (!/\d/.test(evt.target.value)) {
      setError("Los datos no son num1");
    } else {
      setError('');
    }
    handleChange(evt);
  }
  function validateinputurl(evt) {
    if (!/^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/.test(evt.target.value) || !/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(evt.target.value)) {
      setError("Los datos ingresados no son correctos url");
    } else {
      setError('');
    }
    handleChange(evt);
  }

  const [input, setInput] = useState({
    name: "",
    dish_summary: "",
    score: "",
    Healthy_food_level: "",
    Step_by_step: "",
    image: "",
    diets: []

  })
  useEffect(() => {
    dispatch(getTypes());
  }, []);
  
  async function handleSubmit(evt) {
    setInput({
      name: "",
      dish_summary: "",
      score: "",
      Healthy_food_level: "",
      Step_by_step: "",
      image: "",
      diets: []

    })
    if ((input.name) && !/\d/.test(input.name) && (input.diets.length > 0) && input.Healthy_food_level <= 100 && input.dish_summary.length > 0) {

      evt.preventDefault()
      dispatch(postRecipes(input))
      history.push('/home')
      return alert("Receta creada")
      console.log(input)

    }

    alert("Error, Faltan Datos en el Formulario")
  }
  async function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  function handleSelect(evt) {
    if (!input.diets.includes(evt.target.value)) {
      setInput({
        ...input,
        diets: [...input.diets, evt.target.value]
      })
    }

  }
  function handleDelete(evt) {
    setInput({
      ...input,
      diets: input.diets.filter(diet => diet !== evt)
    })

  }

  return (
    <div className={s.conteinercreate}>
      <Link className={s.not} to='/home'>
      <button className={s.volver}>
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
  <span>Back</span>
</button>
      </Link>
      <h1>Crea tu Receta</h1>
      <form className={s.form} onSubmit={handleSubmit} >

        <label>Name:</label>
        <input type="text" onChange={validateinputname}
          value={input.name}
          name="name"
        />
        <div className={s.span}>   <p>{error !== "No es una name" ? null : <p>Ingresa un nombre para tu receta</p>}</p></div>


        <label>Dish_summary:</label>
        <textarea className={s.textarea} rows="5" cols="50" type="text" onChange={validateinputdish}

          value={input.dish_summary}
          name="dish_summary"
        />
       <div className={s.span}> <p>{error !== "No es un texto" ? null : <p className={s.span}>Ingresa un texto</p>}</p></div>


        <label>Healthy_food_level📶:{input.Healthy_food_level}</label>
        <input type="range" min="1" max="100" id="slider" onChange={validateinputnum}
          value={input.Healthy_food_level}
          name="Healthy_food_level"
        />
       <div className={s.span}>  <p>{error !== "Los datos no son num" ? null : <p className={s.span}>Ingresa un numero del 1 al 100</p>}</p></div>

        <label>Score📶:{input.score}</label>
        <input type="range" min="1" max="100" onChange={validateinputnum1}
          value={input.score}
          name="score"
        />
        {error !== "Los datos no son num1" ? null : <span className={s.span}>Ingresa un numero del 1 al 100</span>}

        <label>Step_by_step:</label>
        <textarea className={s.textarea} rows="10" cols="50" type="text" onChange={validateinputstep}
          value={input.Step_by_step}
          name="Step_by_step"
        />
        <div className={s.span}><p> {error !== "No es un texto1" ? null : <p className={s.span}>Ingresa un texto</p>}</p></div>

        <label>Image:</label>
        <input type="text" onChange={validateinputurl}
          value={input.image}
          name="image"
        />
    <div className={s.span}><p>    {error !== "Los datos ingresados no son correctos url" ? null : <p>Debes ingresar una url</p>}</p> </div>
        <select className={s.select} defaultValue='Diets' onChange={(evt) => handleSelect(evt)}>
          <option disabled>Diets</option>
          {type?.map((type) => <option key={type.name} value={type.name}>{type.name}</option>)}

        </select>
        <input className={s.crear} disabled={!input.name || !input.dish_summary} type="submit"
          value="Recipe Create✅" />


      </form>
      <div className={s.contenedor}>

        {input.diets.map(
          (el, index) => <div className={s.option} key={index}> <div className={s.optionp}> <p >{el}</p>
            <button onClick={() => handleDelete(el)}>❌</button></div> </div>)}

      </div>

    </div>
  )
}