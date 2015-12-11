var React = require('react'),
    ApiUtil = require('../../util/api_util'),
    ToysIndex = require('../toys/toys_index'),
    PokemonStore = require('../../stores/pokemon');

var PokemonDetail = React.createClass({
  getInitialState: function () {
    return { pokemon: this.getStateFromStore() };
  },

  getStateFromStore: function () {
    var id = parseInt(this.props.params.pokemonId);
    return PokemonStore.find(id);
  },

  componentDidMount: function () {
    this.listenerToken = PokemonStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchPokemon(newProps.params.pokemonId);
  },

  _onChange: function () {
    this.setState({ pokemon: this.getStateFromStore() });
  },

  render: function () {
    var pokemon = this.state.pokemon;
    var detailView;
    var toyIndex = <ToysIndex toys={pokemon.toys}/>;
    var toyDetail = this.props.children;

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
          {pokemon.toys ? toyIndex : ""}
        </div>
      );
    } else {
      detailView = <div className="pokemon-detail-pane"/>;
    }

    return (
      <div>
        {detailView}
        {pokemon.toys ? toyDetail : ""}
      </div>
    );
  }
});

module.exports = PokemonDetail;
