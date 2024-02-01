import React from "react";
import styles from "../css/Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ image, name, id, weight, height, type }) => {
  return (
    <Link to={`/pokemons/${id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <img src={image} alt="pokemon" />
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.info}>ID: {id}</p>
        <p className={styles.info}>Weight: {weight}</p>
        <p className={styles.info}>Height: {height}</p>
        <p className={styles.info}>Type: {type}</p>
      </div>
    </Link>
  );
};

export default Card;
