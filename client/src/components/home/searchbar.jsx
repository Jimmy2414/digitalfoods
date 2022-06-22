import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipesName } from '../actions/index'
import s from '../../styles/search.module.css'

export default function SearchBar({ search }) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleenter(e) {
        if (e.key === "Enter") {
          handleSubmit(e);
        }
      };
    function handleChange(e) {
        e.preventDefault();
        setName(e.target.value);
    };

    function handleSubmit(e) {

        try {
            if(name.length > 0){
            dispatch(getRecipesName(name));
            search()
            }else{
                alert("enter a name for the search")
            } 
        } catch (error) {
            return error;
        }

        setName('')

    };
    return (
        < >
            <input className={s.search} type="text" placeholder="🔍 Search recipe by name" onKeyPress={handleenter} value={name} onChange={handleChange} />
            <button className={s.btn} type="submit" onClick={handleSubmit}>Search</button>
        </>

    )

};