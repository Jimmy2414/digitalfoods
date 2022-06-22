import React from "react";
import s from '../../styles/loader.module.css'
export default function Loader({setLoader}){
    {  setTimeout(() => {
        setLoader(false)
    }, 5000)}
    return (
        <div className={s.loader1}><div className={s.loader}></div><div className={s.spinner}>
        <span>P</span>
        <span>l</span>
        <span>e</span>
        <span>a</span>
        <span>s</span>
        <span>e</span>
       
        <span> </span>
        <span>W</span>
        <span>a</span>
        <span>i</span>
        <span>t</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div> </div>
        
    
    )

}