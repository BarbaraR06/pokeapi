import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getPokemons,
  orderByHeight,
  orderByWeight,
  orderByID,
} from "../redux/actions";
import CardContainer from "../components/CardContainer";
import styles from '../css/Home.module.css';

const Home = () => {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState({
      id: "id",
      types: "all",
      weight: "weight",
      height: "height",
    });
  
    const handleOrderWeight = (event) => {
      dispatch(orderByWeight(event.target.value));
      setFilter({
        ...filter,
        weight: event.target.value,
      });
    };
  
    const handleOrderHeight = (event) => {
        console.log("handleOrderHeight called with:", event.target.value);
      dispatch(orderByHeight(event.target.value));
      setFilter({
        ...filter,
        height: event.target.value,
      });
    };
  
    const handleOrderById = (event) => {
      dispatch(orderByID(event.target.value));
      setFilter({
        ...filter,
        id: event.target.value,
      });
    };
  
    const handleClick = () => {
      dispatch(getPokemons());
      setFilter({
        ...filter,
        id: "id",
        types: "all",
        weight: "weight",
        height: "height",
      });
    };
  
    useEffect(() => {
      dispatch(getPokemons());
    }, [dispatch]);
  
    return (
      <div className={styles.containerHome}>
        <div className={styles.container}>
          <select  class="select select-primary w-full max-w-xs ml-2 mr-4" value={filter.weight} onChange={(event) => handleOrderWeight(event)}>
            <option value="" disabled defaultValue>
              Ordenar por peso
            </option>
            <option value="min"> Más liviano </option>
            <option value="max"> Más pesado </option>
          </select>

          <select  class="select select-primary w-full max-w-xs ml-2 mr-4" value={filter.height} onChange={(event) => handleOrderHeight(event)}>
            <option value="" disabled defaultValue>
              Ordenar por altura
            </option>
            <option value="max"> Más alto </option>
            <option value="min"> Más bajo </option>
          </select>

          <select  class="select select-primary w-full max-w-xs ml-2 mr-4"value={filter.id} onChange={(event) => handleOrderById(event)}>
            <option value="" disabled defaultValue>
              Ordenar por ID
            </option>
            <option value="max"> Mayor </option>
            <option value="min"> Menor </option>
          </select>

          <button class="btn btn-error text-white" onClick={handleClick}>Resetear filtros</button>
        </div>
        <CardContainer />
      </div>
    );
  };
  
  export default Home;