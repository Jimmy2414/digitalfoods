import React from "react";
import s from '../../styles/paginado.module.css'

export default function Paginadofn({ foodsPerPage, getFood, paginado, curretPage }) {
    let pageNumbers = []
    for (let i = 0; i < Math.ceil(getFood / foodsPerPage); i++) {
        pageNumbers.push(i + 1)
    }


    if (curretPage === 1) {
        pageNumbers = pageNumbers.slice(curretPage - 1, curretPage + 2) 
    }

    if (curretPage > 1 && curretPage < Math.ceil(getFood / foodsPerPage) - 1) {


        pageNumbers = pageNumbers.slice(curretPage - 2, curretPage + 1)

    }
    if (curretPage === Math.ceil(getFood / foodsPerPage)) {

        pageNumbers = pageNumbers.slice(Math.ceil(getFood / foodsPerPage) - 3, Math.ceil(getFood / foodsPerPage))
    }

    if (curretPage === 11) {
        pageNumbers = pageNumbers.slice(Math.ceil(getFood / foodsPerPage) - 3, Math.ceil(getFood / foodsPerPage)) 
    }

    return (


        <nav  >

            <ul className={s.paginado}>
                <button className={s.start} onClick={() => paginado("start")}>≪</button>
                {/* <button onClick={() => paginado("previus")}>🔙</button> */}
                {
                    pageNumbers && pageNumbers.map(n => (
                        <li key={n} >

                            <button className={s.boton} onClick={() => paginado(n)} >{n}</button>
                        </li>
                    ))

                }
                {/* <button onClick={() => paginado("next")}>🔜</button> */}
                <button className={s.finish} onClick={() => paginado("finish")}>≫</button>
            </ul>

        </nav>

    )
}