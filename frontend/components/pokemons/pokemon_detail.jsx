var React = require('react'),
    PokemonStore = require('../../stores/pokemon');

var PokemonDetail = React.createClass({
  getInitialState: function () {
    return {
      pokemon: this.getStateFromStore()
    };
  },

  getStateFromStore: function () {
    var id = parseInt(this.props.params.pokemonId);
    return PokemonStore.find(id);
  },

  render: function () {
    var pokemon = this.state.pokemon;
    var detailView;

    if (pokemon) {
      detailView = (
        <div className="pokemon-detail-pane">
          <div className="detail">
            {pokemon.name}<br/>
            Attack: {pokemon.attack}<br/>
            Defense: {pokemon.defense}<br/>
            Type: {pokemon.poke_type}<br/>
            Moves: {pokemon.moves.join(", ")}<br/>
            <img src={pokemon.image_url} />
          </div>
        </div>
      );
    } else {
      detailView = <div className="pokemon-detail-pane"/>;
    }

    return (
      <div>
        {detailView}
      </div>
    );
  }
});

module.exports = PokemonDetail;
