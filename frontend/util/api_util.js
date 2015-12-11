var PokemonActions = require('../actions/pokemon_actions');

module.exports = {
  fetchAllPokemons: function () {
    $.get("/api/pokemon", {}, function(pokemons){
      PokemonActions.receiveAllPokemons(pokemons);
    });
  },

  fetchPokemon: function (id) {
    $.get("/api/pokemon/" + id, {}, function(pokemon){
      PokemonActions.receivePokemon(pokemon);
    });
  },

  createPokemon: function (newPokemon, callback) {
    $.post("/api/pokemon", {pokemon: newPokemon}, function(pokemon) {
      PokemonActions.receivePokemon(pokemon);
      callback(pokemon.id);
    });
  }
};
