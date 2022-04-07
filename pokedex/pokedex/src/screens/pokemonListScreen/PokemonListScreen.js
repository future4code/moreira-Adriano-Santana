import React from "react";
import Header from "../../components/Header/Header";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { PokeListContainer } from "./styled";
const PokemonListScreen = () => {
  return (
    <div>
      <PokeListContainer>
        <Header />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </PokeListContainer>
    </div>
  );
};
export default PokemonListScreen;
