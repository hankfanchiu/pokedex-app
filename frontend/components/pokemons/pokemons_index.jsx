var React = require('react'),
    ApiUtil = require('../../util/api_util'),
    PokemonStore = require('../../stores/pokemon'),
    PokemonIndexItem = require('./pokemon_index_items');

var PokemonsIndex = React.createClass({
  getInitialState: function () {
    return { pokemons: PokemonStore.all() };
  },

  componentDidMount: function () {
    this.listenerToken = PokemonStore.addListener(this._onChange);
    ApiUtil.fetchAllPokemons();
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  _onChange: function () {
    this.setState({ pokemons: PokemonStore.all() });
  },

  render: function () {
    var pokemonIds = Object.keys(this.state.pokemons);
    var pokemons = pokemonIds.map(function (id) {
      return (
        <PokemonIndexItem key={id}
                          pokemon={this.state.pokemons[id]} />
      );
    }.bind(this));

    return (
      <ul>{pokemons}</ul>
    );
  }
});

module.exports = PokemonsIndex;
