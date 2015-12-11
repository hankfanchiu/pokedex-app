var React = require('react'),
    History = require('react-router').History;

var ToyIndexItem = React.createClass({
  mixins: [History],

  toyDetail: function () {
    var pokemonId = this.props.toy.pokemon_id;
    var toyId = this.props.toy.id;
    var url = "pokemon/" + pokemonId + "/toys/" + toyId;

    this.history.push(url);
  },

  render: function () {
    var toy = this.props.toy;

    return (
      <li className="toy-list-item" onClick={this.toyDetail}>
        {toy.name}

        Happiness: {toy.happiness}

        Price: ${toy.price}
      </li>
    );
  }
});

module.exports = ToyIndexItem;
