import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PokedexScreen from "../screens/pokedexScreen/PokedexScreen";
import PokemonDetailScreen from "../screens/pokemonDetailScreen/PokemonDetailScreen";
import PokemonListScreen from "../screens/pokemonListScreen/PokemonListScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={PokemonListScreen} />
        <Route exact path={"/pokemon/:name"} component={PokemonDetailScreen} />
        <Route exact path={"/pokedex"} component={PokedexScreen} />
        <rout>Error</rout>
      </Switch>
    </BrowserRouter>
  )
};
    export default Router;
