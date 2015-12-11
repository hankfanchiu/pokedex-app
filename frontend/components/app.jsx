var React = require('react'),
    PokemonForm = require('./pokemons/pokemon_form'),
    PokemonsIndex = require('./pokemons/pokemons_index');

var App = React.createClass({
  render: function () {
    return (
      <div id="pokedex">

        <div className="pokemon-index-pane">

          <PokemonForm />

          <PokemonsIndex />

        </div>

        {this.props.children}

      </div>
    );
  }
});

module.exports = App;
