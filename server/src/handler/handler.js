const {
    getAllPokemons,
    getPokemonById,
    getPokemonByParam,
} = require("../controller/controller");

// GET ALL POKEMONS
const getAllPokemonsHandler = async (req, res) => {
    try {
      const pokemons = await getAllPokemons();
      console.log('Pokémons obtenidos:', pokemons);
      res.status(200).json(pokemons);
    } catch (error) {
      console.error('Error al manejar la solicitud de todos los Pokémon:', error);
      res.status(500).json({ error: 'Error al obtener los Pokémon' });
    }
  };

// GET POKEMON BY ID 
const getPokemonByIdHandler = async (req, res) => {
    const { id } = req.params;
    const pokemon = await getPokemonById(id);
    res.status(200).json(pokemon);
};

// GET POKEMON BY PARAM
const getPokemonByParamHandler = async (req, res) => {
    const { param } = req.params;
    const pokemon = await getPokemonByParam(param);
    res.status(200).json(pokemon);
}

module.exports = {
    getAllPokemonsHandler,
    getPokemonByIdHandler,
    getPokemonByParamHandler
}