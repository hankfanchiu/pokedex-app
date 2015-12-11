var AppDispatcher = require('../dispatcher/dispatcher'),
    PokemonConstants = require('../constants/pokemon_constants');

var PokemonActions = {
  receiveAllPokemons: function (pokemons) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },

  receivePokemon: function (pokemon) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemon: pokemon
    });
  },
};

module.exports = PokemonActions;
