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
//import styles from './Home.module.css';

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
      <div>
        <div>
          <select value={filter.weight} onChange={(event) => handleOrderWeight(event)}>
            <option value="" disabled defaultValue>
              Sort by weight
            </option>
            <option value="min"> Lighter </option>
            <option value="max"> Heavier </option>
          </select>
  
          <button onClick={handleClick}>Reset Filters</button>
        </div>
  
        <CardContainer />
      </div>
    );
  };
  
  export default Home;