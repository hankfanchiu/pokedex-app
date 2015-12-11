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
    case PokemonConstants.SINGLE_POKEMON_RECEIVED:
      resetSinglePokemon(payload.pokemon);
      break;
    case PokemonConstants.POKEMON_CREATED:
      updatePokemonsList(payload.pokemon);
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

var resetSinglePokemon = function (pokemon) {
  _pokemons[pokemon.id] = pokemon;
  PokemonStore.__emitChange();
};

var updatePokemonsList = function (pokemon) {
  _pokemons[pokemon.id] = pokemon;
  PokemonStore.__emitChange(pokemon.id);
};

module.exports = PokemonStore;
