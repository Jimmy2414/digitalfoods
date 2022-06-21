import axios from 'axios';
import {
  GET_RECIPES,
  GET_TYPES,
  GET_DATABASE,
  GET_STATE_ID,
  GET_RECIPES_NAME,
  GET_RECIPES_ID,
  FILTER_BY_SEARCHBAR,
  FILTER_BY_ORDER,
  ORDER_BY_SCORE,
  FILTER_BY_DIETS,
  URLLOCALFOOD,
} from './TypesActions.js';

console.log(URLLOCALFOOD);
export function getRecipesAll() {
  return function (dispatch) {
    return fetch('/recipes')
      .then(res => res.json())
      .then(foods => dispatch({ type: GET_RECIPES, payload: foods }))
      .catch(e => {
        console.log(e);
      });
    //    return  axios.get(`${URLLOCALFOOD}/recipes`)

    //     .then((json) => {
    //     return dispatch({
    //         type: GET_RECIPES,
    //         payload: json.data
    //     })
    // }).catch((error) => {
    //     console.log(error)
    // })
  };
}
export function getTypes() {
  return function (dispatch) {
    try {
      axios.get(`/types`).then(types =>
        dispatch({
          type: GET_TYPES,
          payload: types.data,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDatabase() {
  return async function (dispatch) {
    try {
      let dataBase = await axios.get(`/recipes/dates`);

      return dispatch({
        type: GET_DATABASE,
        payload: dataBase.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function postRecipes(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`/recipe`, payload);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export function searchId(payload) {
  return {
    type: GET_STATE_ID,
    payload: payload,
  };
}

export function searchBarName(payload) {
  return {
    type: FILTER_BY_SEARCHBAR,
    payload: payload,
  };
}

export function getRecipesName(name) {
  return async function (dispatch) {
    try {
      const recipes = await axios.get(`/recipes?name=${name}`);
      console.log(recipes.data);
      return dispatch({
        type: GET_RECIPES_NAME,
        payload: recipes.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getFilterByDiets(payload) {
  return {
    type: FILTER_BY_DIETS,
    payload: payload,
  };
}

export function filterByOrder(payload) {
  return {
    type: FILTER_BY_ORDER,
    payload: payload,
  };
}

export function orderByScore(payload) {
  return {
    type: ORDER_BY_SCORE,
    payload: payload,
  };
}
export function getDetail(id) {
  return async function (dispatch) {
    try {
      const recipes = await axios.get(`/recipes/${id}`);
      return dispatch({
        type: GET_RECIPES_ID,
        payload: recipes.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
