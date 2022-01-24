import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; /// A statement that imports "Person" from the Person.js file

class App extends Component { /// person tag in this funtion is a self closing tag
  render() {
    return (
      <div className='App'> 
      
      <h1> Hi, im a react app</h1> 

      <Person/>  
      </div>
    );
  }
}

export default App;
