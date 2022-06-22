import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import s from "../../styles/carddetail.module.css"
import Loader from "./loader";
export default function Detail(props) {
    const[loader, setLoader] =useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDetail(props.match.params.id));
        console.log(props.match.params.id)

    }, [dispatch])
    const myFood = useSelector((state) => state.detail)
    const diet = myFood.diets
    const sinsummary = "This recipe does not contain summary"
    const sinsteps = "This recipe does not contain steps"


    
    return (
        <div>
        {loader === true?(
            <Loader setLoader={setLoader}/>
        ):(
        <div className={s.containergeneral}>

            {

                <div>

                    <h1 className={s.titulo}> {myFood.name}</h1>

                    <img className={s.imagen} src={myFood.image} alt="Not Found" />
                    <Link to="/home">
                          {/* <button className={s.boton}> Atrás ↩</button>  */}
                          <button className={s.boton}>
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
  <span>Back</span>
</button>
                           </Link>
                    <div className={s.text}>

                        <h3>

                            Type Diets: <p>➤ {(diet)?.join(', ➤ ')}</p> </h3>

                        <div>Summary: <p dangerouslySetInnerHTML={{
                            __html: myFood.summary ? myFood.summary :
                                sinsummary
                        }} />

                            <h3>Steps: <p>{myFood.steps ? myFood.steps : sinsteps}</p> </h3>
                            <h3>Dish Type: {myFood.types ? myFood.types : "Not contains types food"}</h3>
                            <h3>Score: {myFood.score}</h3>
                            <h3>Healthy food: {myFood.healthScore} </h3>
                        </div>

                    </div>
                </div>

            }

        </div>
        )}
        </div>
    )
}


