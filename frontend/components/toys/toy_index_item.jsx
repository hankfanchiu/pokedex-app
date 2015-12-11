var React = require('react'),
    History = require('react-router').History;

var ToyIndexItem = React.createClass({
  mixins: [History],

  toyDetail: function () {
    var pokemonId = this.props.toy.pokemon_id;
    var url = "pokemon/" + pokemonId + "/toys/" + this.props.toy.id;
    this.history.push(url);
  },

  render: function () {
    var toy = this.props.toy;
    return (
      <li className="toy-list-item" onClick={this.toyDetail}>
        {toy.name}
        {toy.happiness}
        {toy.price}
      </li>
    );
  }
});

module.exports = ToyIndexItem;
