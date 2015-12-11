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
    case PokemonConstants.POKEMON_RECEIVED:
      setPokemon(payload.pokemon);
      break;
  }
};

PokemonStore.all = function () {
  var pokemonCopies = {};
  Object.keys(_pokemons).forEach(function (id) {
    pokemonCopies[id] = _pokemons[id];
  });

  return pokemonCopies;
};

PokemonStore.find = function (id) {
  return _pokemons[id];
};

var resetPokemons = function (pokemons) {
  _pokemons = {};

  pokemons.forEach(function(pokemon) {
    _pokemons[pokemon.id] = pokemon;
  });

  PokemonStore.__emitChange();
};

var setPokemon = function (pokemon) {
  _pokemons[pokemon.id] = pokemon;
  PokemonStore.__emitChange();
};

module.exports = PokemonStore;
