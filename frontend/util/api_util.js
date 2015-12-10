var PokemonActions = require('../actions/pokemon_actions');

module.exports = {
  fetchAllPokemons: function () {
    $.get("/api/pokemon", {}, function(pokemons){
      PokemonActions.receiveAllPokemons(pokemons);
    });
  },

  fetchPokemon: function (id) {
    $.get("/api/pokemon/" + id, {}, function(pokemon){
      PokemonActions.receiveSinglePokemon(pokemon);
    });
  }
};
