import { connect } from "react-redux";
import s from '../../styles/home.module.css'
import Card  from "./card";
import { Link } from "react-router-dom";
function Cards(props) {


    if (props.foodsdetails) {
        return (
            <div className={s.container}>
{props.foodsdetails.map(u  =>
<Card
key={u.idApi? u.idApi: u.id}
name={u.name}
score={u.score}
image={u.image}
id={u.idApi? u.idApi: u.id}
diets={u.diets}
Dish={u.types}
Steps={u.steps}

/>
                // <li className={s.cartas} key={u.idApi}>
                //     <img className={s.imagen} src={u.image} alt="not image" />
                //     <h3 className={s.card}>{u.name}</h3>
                //     {/* <h3>{u.summary}</h3> */} </li>

  )}
</div>   
          )  }
          return <div>Sin Recetas</div>
}
function mapStateToProps(state) {
    return {
        foodsdetails: state.recipesAll
    }
}
export default connect(mapStateToProps, null)(Cards)