var React = require('react'),
    History = require('react-router').History;

var PokemonIndexItem = React.createClass({
  mixins: [History],

  showDetail: function () {
    this.history.push("pokemon/" + this.props.pokemon.id);
  },

  render: function () {
    return (
      <li className='poke-list-item' onClick={this.showDetail}>
        ({this.props.pokemon.id}) {this.props.pokemon.name}
      </li>
    );
  }
});

module.exports = PokemonIndexItem;
