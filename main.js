import React from 'react';
import {render} from 'react-dom';
import ContactList from './contactList';

var Main = React.createClass({
  getInitialState: function () {
    return {
      people: []
    }
  },
  componentWillMount: function () {
    setTimeout(function(){
      this.setState({
        people: [
          {
            id: 1,
            name: "Michael"
          }, 
          {
            id:2, 
            name: "Karen"
          }, 
          {
            id:3,
            name:"Alex"
          }, 
          {
            id:4,
            name: "Mason"
          },
          {
            id:5,
            name: "Noemi"
          }
        ]
      })
    }.bind(this), 2000)
  },
  render: function () {
    return (
      <ContactList people={this.state.people} />
    )
  }
})

render(<Main />, document.getElementById('app'));