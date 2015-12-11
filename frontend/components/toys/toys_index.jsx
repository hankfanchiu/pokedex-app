var React = require('react'),
    ToyIndexItem = require('./toy_index_item');

var ToysIndex = React.createClass({
  render: function () {
    var toys = this.props.toys.map(function (toy, idx) {
      return <ToyIndexItem key={idx} toy={toy}/>;
    });

    return (
      <ul>{toys}</ul>
    );
  }
});

module.exports = ToysIndex;
