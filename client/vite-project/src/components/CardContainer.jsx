import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import styles from "../css/CardContainer.module.css";

const CardContainer = () => {
  const pokemons = useSelector((state) => state.pokemons);

  return (
    <div className={styles.container}>
      {pokemons.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            image={pokemon.image}
            name={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            id={pokemon.id}
            weight={pokemon.weight}
            height={pokemon.height}
            type={pokemon.types}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
