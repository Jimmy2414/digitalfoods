import { connect } from "react-redux";
import s from '../../styles/home.module.css'
function Foods(props) {
    if (props.foodsdetails) {
        return (
            <div className={s.contenedor}>
{props.foodsdetails.map(u =>

                     
                <div className={s.food} key={u.idApi}>
                    <img className={s.img} src={u.image} alt="not image" />
                    <h3 className={s.food1}>{u.name}</h3>
                    {/* <h3>{u.summary}</h3> */} </div>

                )
}
            </div>
          )  }
          return <div>Sin Recetas</div>
}
function mapStateToProps(state) {
    return {
        foodsdetails: state.recipesAll
    }
}
export default connect(mapStateToProps, null)(Foods)