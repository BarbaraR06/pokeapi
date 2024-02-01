import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonById, resetDetail } from "../redux/actions";
import { useEffect } from "react";
import styles from "../css/Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPokemonById(id));
    return () => {
      dispatch(resetDetail());
    };
  }, [dispatch, id]);

  const pokemon = useSelector((state) => state.pokemon) || {};
  const poke = Array.isArray(pokemon) ? pokemon[0] : pokemon;

  let types = pokemon.types;
  if (pokemon.types && pokemon.types.length > 0) {
    types = pokemon.types.map((type) => type.type.name).join(", ");
  }

  return (
    <div className="card w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-base-100 shadow-xl">
    <div className="card w-96 bg-base-100 shadow-xl" style={{ backgroundColor: '#b4b8bba6' }}>
      <figure>
        <img className={styles.image} src={poke.image} alt="Pokemon" />
      </figure>
      <div className="text-center card-body ">
        {poke?.name && (
          <h2 className="text-center card-title">
            {poke.name.toUpperCase()}
            <div className="badge badge-secondary">{poke.id}</div>
          </h2>
        )}
        <p className="text-left">Weight: {poke?.weight}</p>
        <p className="text-left">Height: {poke?.height}</p>
        <p className="text-left">Type: {types}</p>
      </div>
    </div>
    </div>
  );
};

export default Detail;
