const axios = require("axios");

// GET ALL POKEMONS

const getAllPokemons = async () => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");
    console.log(response.data.results);
    return response.data.results;
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

const getPokemonByParam = async (param) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?${param}`);
  return response.data.sort((a, b) => a.weight - b.weight);
}


module.exports = {
  getAllPokemons,
  getPokemonById,
  getPokemonByParam,
}