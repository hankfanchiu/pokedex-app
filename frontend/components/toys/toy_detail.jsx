var React = require('react'),
    PokemonStore = require('../../stores/pokemon'),
    ApiUtil = require('../../util/api_util');

var ToyDetail = React.createClass({
  getInitialState: function () {
    return { toy: this.getStateFromStore() };
  },

  getStateFromStore: function () {
    var pokemonId = parseInt(this.props.params.pokemonId);
    var toyId = parseInt(this.props.params.toyId);

    var toys = PokemonStore.find(pokemonId).toys;

    var toy;
    toys.forEach(function (possibleToy) {
      if (possibleToy.id === toyId) {
        toy = possibleToy;
      }
    });

    return toy;
  },

  _onChange: function () {
    this.setState({ toy: this.getStateFromStore() });
  },

  componentDidMount: function () {
    this.listenerToken = PokemonStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  componentWillReceiveProps: function (newProps) {
    var pokemonId = parseInt(this.props.params.pokemonId);
    var toyId = parseInt(newProps.params.toyId);

    var toys = PokemonStore.find(pokemonId).toys;

    toys.forEach(function (possibleToy) {
      if (possibleToy.id === toyId) {
        this.setState({ toy: possibleToy });
      }
    }.bind(this));
  },

  showDetail: function () {
    var toy = this.state.toy;

    return (
      <div className="detail">
        {toy.name}<br/>

        Happiness: {toy.happiness}<br/>

        Price: ${toy.price}<br/>

        <img src={toy.image_url} />
      </div>
    );
  },

  render: function () {
    return (
      <div className="toy-detail-pane">
        {this.state.toy ? this.showDetail() : <div className="detail" />}
      </div>
    );
  }
});

module.exports = ToyDetail;
