var React = require('react'),
    ApiUtil = require('../../util/api_util'),
    PokemonStore = require('../../stores/pokemon'),
    PokemonIndexItem = require('./pokemon_index_items');

var PokemonsIndex = React.createClass({
  getInitialState: function () {
    return {
      pokemons: PokemonStore.all()
    };
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
    var pokemons = Object.keys(this.state.pokemons).map(function (key) {
      return <PokemonIndexItem key={key} pokemon={this.state.pokemons[key]}/>;
    }.bind(this));
    return (
      <div>
        <ul>
          {pokemons}
        </ul>
      </div>
    );
  }
});

module.exports = PokemonsIndex;
