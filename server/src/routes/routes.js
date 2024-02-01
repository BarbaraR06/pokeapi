const { Router } = require("express");
const {
  getAllPokemonsHandler,
  getPokemonByIdHandler,
} = require("../handler/handler");

const pokeRouter = Router();

pokeRouter.get("/", getAllPokemonsHandler);
pokeRouter.get("/:id", getPokemonByIdHandler);

module.exports = pokeRouter;
