const axios = require("axios");

// GET ALL POKEMONS

const getAllPokemons = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");
    const results = response.data.results;

    const pokemonsWithDetails = await Promise.all(
      results.map(async (pokemon) => {
        const detailsResponse = await axios.get(pokemon.url);
        const {
          id,
          name,
          weight,
          height,
          sprites: { front_default: image },
          types,
        } = detailsResponse.data;

        return {
          id,
          name,
          weight,
          height,
          image,
          types: types.map((type) => type.type.name),
        };
      })
    );

    console.log('Pokémons with details:', pokemonsWithDetails);
    return pokemonsWithDetails;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    throw error; 
  }
};


// GET POKEMON BY ID

const getPokemonById = async (id) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`); 
    const { id: pokemonId, name, weight, height, sprites, types } = response.data;
    const info = {
      id: pokemonId,
      name,
      weight,
      height,
      image: sprites.front_default,
      types
    }
    return info;
  } catch (error) {
    console.log(`Error fetching Pokémon with ID ${id}:`, error);
    throw error;
  }
};

//GET POKEMON BY PARAM


module.exports = {
  getAllPokemons,
  getPokemonById,
}