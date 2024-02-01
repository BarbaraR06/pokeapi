import axios from "axios";
import {
  GET_POKEMONS,
  GET_POKEMON_BY_ID,
  ORDER_BY_WEIGHT,
  ORDER_BY_ID,
  ORDER_BY_HEIGHT,
  RESET,
  RESET_DETAIL,
} from "../actionTypes";

export const resetDetail = () => {
  return {
    type: RESET_DETAIL, 
  };
};

export const getPokemons = () => {
  return async (dispatch) => {
    const response = await axios.get(`/pokemons`);
    const pokemons = response.data;
    dispatch({
      type: GET_POKEMONS,
      payload: pokemons,
    });
  };
};

export const getPokemonById = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`/pokemons/${id}`);
    const pokemon = response.data;
    dispatch({
      type: GET_POKEMON_BY_ID,
      payload: pokemon,
    });
  };
};

export const orderByWeight = (payload) => {
  return {
    type: ORDER_BY_WEIGHT,
    payload,
  };
};

export const orderByHeight = (payload) => {
  return {
    type: ORDER_BY_HEIGHT,
    payload,
  };
};

export const orderByID = (payload) => {
  return {
    type: ORDER_BY_ID,
    payload,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
