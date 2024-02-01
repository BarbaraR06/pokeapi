import {
    GET_POKEMONS,
    GET_POKEMON_BY_ID,
    ORDER_BY_WEIGHT,
    ORDER_BY_ID,
    ORDER_BY_HEIGHT,
    RESET
} from "../actionTypes";

const initialState = {
    pokemons: [],
    pokemon: {},
    order: 'default'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            }
        case GET_POKEMON_BY_ID:
            return {
                ...state,
                pokemon: action.payload
            }

        case ORDER_BY_WEIGHT:
               const orderbyWeight = action.payload;
               let sortedByWeight;
               if (orderbyWeight === 'asc') {
                   sortedByWeight = state.pokemons.sort((a, b) => a.weight - b.weight);
               } else if (orderbyWeight === 'desc') {
                   sortedByWeight = state.pokemons.sort((a, b) => b.weight - a.weight);
               } else {
                   sortedByWeight = state.pokemons;
               }
               return {
                   ...state,
                   pokemons: sortedByWeight
               }  

        case ORDER_BY_ID:
            const orderbyID = action.payload;
            let sortedByID;
            if (orderbyID === 'asc') {
                sortedByID = state.pokemons.sort((a, b) => a.id - b.id);
            } else if (orderbyID === 'desc') {
                sortedByID = state.pokemons.sort((a, b) => b.id - a.id);
            }
            else {
                sortedByID = state.pokemons;
            }
            return {
                ...state,
                pokemons: sortedByID
            }

        case ORDER_BY_HEIGHT:
            const orderbyHeight = action.payload;
            let sortedByHeight;
            if (orderbyHeight === 'asc') {
                sortedByHeight = state.pokemons.sort((a, b) => a.height - b.height);
            } else if (orderbyHeight === 'desc') {
                sortedByHeight = state.pokemons.sort((a, b) => b.height - a.height);
            }
            else {
                sortedByHeight = state.pokemons;
            }
            return {
                ...state,
                pokemons: sortedByHeight
            }

        case RESET:
            return {
                ...state,
                pokemons: {},
            }
            default: 
            return {...state};
}
}

export default reducer;