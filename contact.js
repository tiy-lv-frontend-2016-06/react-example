import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <p>{this.props.id}. {this.props.name}</p>
    )
  }
})