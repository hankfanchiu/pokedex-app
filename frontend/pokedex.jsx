var React = require('react'),
    ReactDOM = require('react-dom');

var Router = require('react-router').Router,
    Route = require('react-router').Route;

var App = require('./components/app'),
    PokemonDetail = require('./components/pokemons/pokemon_detail'),
    ToyDetail = require('./components/toys/toy_detail');

var router = (
  <Router>
    <Route path="/" component={App}>
      <Route path="pokemon/:pokemonId" component={PokemonDetail}>
        <Route path="toys/:toyId" component={ToyDetail} />
      </Route>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(router, document.getElementById("root"));
});
