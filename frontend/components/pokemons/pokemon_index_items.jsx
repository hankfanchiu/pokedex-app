var React = require('react'),
    History = require('react-router').History;

var PokemonIndexItem = React.createClass({
  mixins: [History],

  showDetail: function () {
    var url = "pokemon/" + this.props.pokemon.id;
    this.history.push(url);
  },

  render: function () {
    var pokemon = this.props.pokemon;

    return (
      <li className='poke-list-item' onClick={this.showDetail}>
        {pokemon.id}) {pokemon.name}
      </li>
    );
  }
});

module.exports = PokemonIndexItem;
