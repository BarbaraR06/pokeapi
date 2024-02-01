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
        let arr;
      
        if (action.payload === "min") {
          arr = state.pokemons.sort((pokeA, pokeB) => pokeA.weight - pokeB.weight);
        } else if (action.payload === "max") {
          arr = state.pokemons.sort((pokeA, pokeB) => pokeB.weight - pokeA.weight);
        } else {
          console.log("error");
          return state;
        }
      
        return {
          ...state,
          pokemons: arr,
      };

    case ORDER_BY_ID:
      const orderbyID = action.payload;
      let sortedByID;
      if (orderbyID === "asc") {
        sortedByID = state.pokemons.sort((a, b) => a.id - b.id);
      } else if (orderbyID === "desc") {
        sortedByID = state.pokemons.sort((a, b) => b.id - a.id);
      } else {
        sortedByID = state.pokemons;
      }
      return {
        ...state,
        pokemons: sortedByID,
      };

    case ORDER_BY_HEIGHT:
      const orderbyHeight = action.payload;
      let sortedByHeight;
      if (orderbyHeight === "asc") {
        sortedByHeight = state.pokemons.sort((a, b) => a.height - b.height);
      } else if (orderbyHeight === "desc") {
        sortedByHeight = state.pokemons.sort((a, b) => b.height - a.height);
      } else {
        sortedByHeight = state.pokemons;
      }
      return {
        ...state,
        pokemons: sortedByHeight,
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
