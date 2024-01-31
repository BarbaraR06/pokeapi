const { Router } = require("express");
const {
  getAllPokemonsHandler,
  getPokemonByIdHandler,
  getPokemonByParamHandler,
} = require("../handler/handler");

const pokeRouter = Router();

pokeRouter.get("/", getAllPokemonsHandler);
pokeRouter.get("/:id", getPokemonByIdHandler);
pokeRouter.get("/param/:param", getPokemonByParamHandler);

module.exports = pokeRouter;
