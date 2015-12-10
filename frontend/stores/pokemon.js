var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    PokemonConstants = require('../constants/pokemon_constants');

var _pokemons = {};
var PokemonStore = new Store(AppDispatcher);

PokemonStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PokemonConstants.POKEMONS_RECEIVED:
      resetPokemons(payload.pokemons);
      break;
  }
};

PokemonStore.all = function () {
  var copiedPokemons = {};
  Object.keys(_pokemons).forEach(function (pokemonKey) {
    copiedPokemons[pokemonKey] = _pokemons[pokemonKey];
  });

  return copiedPokemons;
};

var resetPokemons = function (pokemons) {
  _pokemons = {};
  pokemons.forEach(function(pokemon) {
    _pokemons[pokemon.id] = pokemon;
  });
  PokemonStore.__emitChange();
};

module.exports = PokemonStore;
