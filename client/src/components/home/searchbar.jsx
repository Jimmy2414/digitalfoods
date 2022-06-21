import { useState } from "react";
import { useDispatch } from "react-redux";
import {getRecipesName, searchBarName} from '../actions/index'
import s from '../../styles/search.module.css'
export default function SearchBar({search}){
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    
    function handleChange(e) {    
        e.preventDefault();    
        setName(e.target.value);
    };

    function handleSubmit(e) {
       
        try {
            dispatch(getRecipesName(name));
         search()   
        } catch (error) {            
            return error;
        }

        setName('')
        
    };
    return (
        < >
            <input className={s.search} type="text"  placeholder="Search recipe by name" value={name} onChange={handleChange}/>
            <button className={s.botonsearch} type="submit" onClick={handleSubmit}>Search🔍</button>
        </>
        
    )

};