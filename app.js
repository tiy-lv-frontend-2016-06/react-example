import React from 'react';

export default React.createClass({
  getDefaultProps: function () {
    return {
      greeting: 'Hello World'
    }
  },
  getInitialState: function () {
    return {
      greeting: this.props.greeting
    }
  },
  doThis: function() {
    this.setState({
      greeting: 'Goodbye Earth'
    })
  },
  render: function () {
    return (
      <div id="bla">
        <h1 onClick={this.doThis}>{this.state.greeting}</h1>
      </div>
    )
  }
})