import React from 'react';
import Contact from './contact';

export default React.createClass({
  render: function () {
    return (
      <div>
        {this.props.people.map(function(person){
          return <Contact key={person.id} id={person.id} name={person.name} />
        })}
      </div>
    )
  }
});