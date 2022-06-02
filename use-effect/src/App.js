import React from "react";
import axios from "axios";
import styled from "styled-components";
import PokeCard from "./components/PokeCard/PokeCard";
import { useEffect, useState } from "react";

const ListaPokemon = styled.div`
margin-left: 50%;
margin-top: 60px;
`

export default function App() {

  const [pokeName, setPokeName] = useState("");
  const [pokeList, setPokeList] = useState([]);

 
    useEffect(() => {
      axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {setPokeList(response.data.results)
      })
      .catch(err => {
      console.log(err);
      })
       },[])
    
    const onChangePokeName = (event) => {
    setPokeName(event.target.value);
   };

    
    return (
      <ListaPokemon>
          <select onChange={onChangePokeName}>
          <option value={pokeName}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        
        {pokeName && <PokeCard pokemon={pokeName}/>}
      </ListaPokemon>
    );
  }
