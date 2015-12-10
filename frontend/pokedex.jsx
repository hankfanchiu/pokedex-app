var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    App = require('./components/app'),
    PokemonDetail = require('./components/pokemons/pokemon_detail'),
    PokemonsIndex = require('./components/pokemons/pokemons_index');

var router = (
  <Router>
    <Route path="/" component={App}>
      <Route path="pokemon/:pokemonId" component={PokemonDetail}></Route>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    router,
    document.getElementById("root"));
});
