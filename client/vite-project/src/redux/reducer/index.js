import {
  GET_POKEMONS,
  GET_POKEMON_BY_ID,
  ORDER_BY_WEIGHT,
  ORDER_BY_ID,
  ORDER_BY_HEIGHT,
  RESET,
} from "../actionTypes";

const initialState = {
  pokemons: [],
  pokemon: {},
  order: "default",
};

const reducer = (state = initialState, action) => {
  let arr = [];

  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

    case GET_POKEMON_BY_ID:
      return {
        ...state,
        pokemon: action.payload,
      };

    case ORDER_BY_WEIGHT:
      if (action.payload === "min") {
        arr = state.pokemons.sort(
          (pokeA, pokeB) => pokeA.weight - pokeB.weight
        );
      } else if (action.payload === "max") {
        arr = state.pokemons.sort(
          (pokeA, pokeB) => pokeB.weight - pokeA.weight
        );
      } else {
        console.log("error");
        return state;
      }

      return {
        ...state,
        pokemons: arr,
      };

    case ORDER_BY_HEIGHT:
      const orderbyHeight = action.payload;
      let sortedByHeight;

      const pokemonsCopia = [...state.pokemons];

      if (orderbyHeight === "min") {
        sortedByHeight = pokemonsCopia.sort(
          (a, b) => parseInt(a.height) - parseInt(b.height)
        );
      } else if (orderbyHeight === "max") {
        sortedByHeight = pokemonsCopia.sort(
          (a, b) => parseInt(b.height) - parseInt(a.height)
        );
      } else {
        console.log("error");
        return state;
      }

      return {
        ...state,
        pokemons: sortedByHeight,
      };

    case ORDER_BY_ID:
      const orderbyID = action.payload;
      let sortedByID;

      const pokemonsCopia2 = [...state.pokemons];

      if (orderbyID === "min") {
        sortedByID = pokemonsCopia2.sort((a, b) => a.id - b.id);
      } else if (orderbyID === "max") {
        sortedByID = pokemonsCopia2.sort((a, b) => b.id - a.id);
      } else {
        console.error("Error", orderbyID);
        return state;
      }
      return {
        ...state,
        pokemons: sortedByID,
      };

    case RESET:
      return {
        ...state,
        pokemons: [],
      };
    default:
      return { ...state };
  }
};

export default reducer;
