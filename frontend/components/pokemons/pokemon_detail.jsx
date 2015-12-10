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

    if (this.state.pokemon) {
      detailView = (
        <div className="pokemon-detail-pane">
          <div className="detail">
            {pokemon.name}<br/>
            {pokemon.attack}<br/>
            {pokemon.defense}<br/>
            {pokemon.poke_type}<br/>
            {pokemon.moves}<br/>
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
