import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../redux/actions";
import { useEffect } from "react";
import styles from "../css/Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPokemonById(id));
    return () => {};
  }, [dispatch, id]);

  const pokemon = useSelector((state) => state.pokemonById);

  if (!pokemon || Object.keys(pokemon).length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.name}>{pokemon.name}</h2>
          <p className={styles.info}>ID: {pokemon.id}</p>
          <p className={styles.info}>Weight: {pokemon.weight}</p>
          <p className={styles.info}>Height: {pokemon.height}</p>
          <p className={styles.info}>Type: {pokemon.types}</p>
          <img className={styles.image} src={pokemon.image} alt="pokemon" />
        </div>
      </div>
    </div>
  );
};

export default Detail;
