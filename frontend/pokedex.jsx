var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    App = require('./components/app'),
    PokemonsIndex = require('./components/pokemons/pokemons_index');

var router = (
  <Router>
    <Route path="/" component={App} />
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    router,
    document.getElementById("root"));
});
