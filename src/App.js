import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; /// A statement that imports "Person" from the Person.js file

class App extends Component {
  render() {
    return (
      <div className='App'> 
      
      <h1> Hi, im a react app</h1>

      <Person/> ////self closing tag that is imported from the person.js file

      </div>
    );
  }
}

export default App;
