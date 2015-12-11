var AppDispatcher = require('../dispatcher/dispatcher'),
    PokemonConstants = require('../constants/pokemon_constants');

var PokemonActions = {
  receiveAllPokemons: function (pokemons) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },

  receiveSinglePokemon: function (pokemon) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.SINGLE_POKEMON_RECEIVED,
      pokemon: pokemon
    });
  },

  receiveNewPokemon: function (pokemon) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_CREATED,
      pokemon: pokemon
    });
  }
};

module.exports = PokemonActions;
