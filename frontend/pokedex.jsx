var React = require('react'),
    ReactDOM = require('react-dom'),
    PokemonsIndex = require('./components/pokemons/pokemons_index');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<PokemonsIndex/>, document.getElementById("root"));
});
