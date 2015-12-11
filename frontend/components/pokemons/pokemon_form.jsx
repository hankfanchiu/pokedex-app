var React = require('react'),
    ApiUtil = require('../../util/api_util'),
    History = require('react-router').History,
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var PokemonForm = React.createClass({
  mixins: [History, LinkedStateMixin],

  getInitialState: function () {
    return {
      name: "",
      attack: "",
      defense: "",
      poke_type: "",
      moves: [],
      image_url: ""
    };
  },

  resetState: function () {
    this.setState({
      name: "",
      attack: "",
      defense: "",
      poke_type: "",
      moves: [],
      image_url: ""
    });
  },

  _pushNewPokemon: function (id) {
    this.history.push("/pokemon/" + id);
  },

  handleCreate: function (e) {
    e.preventDefault();

    var newPokemon = {
      name: this.state.name,
      attack: this.state.attack,
      defense: this.state.defense,
      poke_type: this.state.poke_type,
      moves: this.state.moves.split(","),
      image_url: this.state.image_url
    };

    ApiUtil.createPokemon(newPokemon, this._pushNewPokemon);
    this.resetState();
  },

  pokeTypes: function () {
    return window.pokemonTypes.map(function(pokemonType, idx) {
      return (
        <option value={pokemonType} key={idx}>{pokemonType}</option>
      );
    });
  },

  render: function () {
    return (
      <form className="new-pokemon">

        <input type="text"
               valueLink={this.linkState("name")}
               placeholder="Pokemon name"/>

        <input type="text"
               valueLink={this.linkState("attack")}
               placeholder="Attack value"/>

        <input type="text"
               valueLink={this.linkState("defense")}
               placeholder="Defense value"/>

        <select valueLink={this.linkState("poke_type")}>
          <option></option>
          {this.pokeTypes()}
        </select>

        <input type="text"
               valueLink={this.linkState("moves")}
               placeholder="Move 1, Move 2, Move 3..."/>

        <input type="text"
               valueLink={this.linkState("image_url")}
               placeholder="Pokemon picture URL"/>

        <button onClick={this.handleCreate}>Create Pokemon!</button>
      </form>
    );
  }
});

module.exports = PokemonForm;
