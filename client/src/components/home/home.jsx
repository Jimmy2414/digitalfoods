


import Paginadofn from "./pagination";
import s from '../../styles/home.module.css'

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesAll, getTypes } from '../actions/index'
import Foods from '../home/foods';
import Nabvar from "../Navbar";
import Cards from "./cards";
import Card from "./card";
import { useState, useEffect } from "react";
import SearchBar from "./searchbar";
export default function Home() {
    const [order, setOrder] = useState('')
    const [searchClick, setSearchClick] = useState(false) // estado local
    const dispatch = useDispatch()
    const getFood = useSelector((state) => state.recipesAll)
    const recipes = useSelector((state) => state.recipes)
    const typesAll = useSelector(state => state.types)
    const [foodPerSearch] = useState(1)

    const [curretPage, setCurrentPage] = useState(1)
    const [foodsPerPage, setFoodsPerPage] = useState(9)
    const indexOfLastFoods = curretPage * foodsPerPage
    const indexOfFirstFoods = indexOfLastFoods - foodsPerPage
    const currentFoods = getFood.slice(indexOfFirstFoods, indexOfLastFoods)

    // const paginado = (pageNumber) => {
    //     setCurrentPage(pageNumber)
    // }
    const paginado = (pageNumber) => {
        let page = curretPage;
        if (pageNumber === 'start') {
            setCurrentPage(1)
        }
        else if (pageNumber === 'finish') {
            setCurrentPage(Math.ceil(getFood.length / foodsPerPage))
        }
        else if (pageNumber === 'next' && curretPage < Math.ceil(getFood.length / foodsPerPage)) {
            page = curretPage + 1;
            setCurrentPage(page)
        }
        else if (pageNumber === 'previus' && curretPage > 1) {
            page = curretPage - 1;
            setCurrentPage(page)
        }
        else if (typeof pageNumber === 'number') {
            setCurrentPage(pageNumber)
        }
    }

    useEffect(() => {
        dispatch(getRecipesAll());
    }, [dispatch])
    useEffect(() => {
        dispatch(getTypes())
    }, [])

    function getFoods(e) {
        e.preventDefault();
        dispatch(getRecipesAll());



    }

    function search() {
        setSearchClick(false)
     setTimeout(() => {setCurrentPage(1)},2000  )
        

    }

    if (searchClick === false ) {


        const currentFoods = recipes.slice(indexOfFirstFoods, indexOfLastFoods)
      
        console.log(currentFoods)
 
        return (


            <div className={s.hidden}>

                <div className={s.imagen1}> </div>
                <div   >
                    <div className={s.home} >

                        <SearchBar
                            search={search}
                      
                            />
                        <Nabvar typesAll={typesAll} setOrder={setOrder} setCurrentPage={setCurrentPage} />
                        <button className={s.volveracargar} onClick={e => { getFoods(e) }} >

                            Reload Recipes ↺

                        </button>
                        <Paginadofn
                            foodsPerPage={foodsPerPage}
                            getFood={recipes.length}
                            paginado={paginado}
                            curretPage={curretPage }
                        />
                        <div className={s.total1}>

                            {currentFoods?.map((u) => {
                                return (

                                    <div className={s.total}
                                        key={u.idApi ? u.idApi : u.id || 23432} >

                                        <Card
                                            key={u.idApi ? u.idApi : u.id}
                                            name={u.name ? u.name : "not name"}
                                            score={u.score}
                                            image={u.image || "https://www.knownhost.com/blog/wp-content/uploads/2017/11/404-Error-Message.jpg"}
                                            id={u.idApi ? u.idApi : u.id}
                                            diets={u.diets}
                                            Dish={u.types ? u.types : "Not contains types food"}
                                            Steps={u.steps}
                                        />

                                    </div>

                                )
                            })}



                        </div>
                    </div>
                </div>
            </div>
        )
       
    }

    return (
        
        <div className={s.home}>
            <div className={s.home}>

                <SearchBar
                    search={search} />
                <Nabvar typesAll={typesAll} setOrder={setOrder} setCurrentPage={setCurrentPage} />
                <button className={s.volveracargar} onClick={e => { getFoods(e) }} >

                    Reload Recipes ↺


                </button>
                <Paginadofn
                    foodsPerPage={foodsPerPage}
                    getFood={getFood.length}
                    paginado={paginado}
                    curretPage={curretPage}
                />
                <div className={s.total1}>
                    {currentFoods?.map((u) => {
                        return (

                            <div className={s.total}
                                key={u.idApi ? u.idApi : u.id} >
                                <Card
                                    key={u.idApi ? u.idApi : u.id}
                                    name={u.name}
                                    score={u.score}
                                    image={u.image}
                                    id={u.idApi ? u.idApi : u.id}
                                    diets={u.diets}
                                    Dish={u.types}
                                    Steps={u.steps}
                                />
                            </div>

                        )
                    })}



                </div>
            </div>

        </div>
    )
}


// export default connect(null, {getRecipesAll})(Home)