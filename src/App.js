import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; /// A statement that imports "Person" from the Person.js file

class App extends Component { /// person tag in this funtion is a self closing tag
  render() {
    return (/// properties added to the person tags
      <div className='App'> 
      
      <h1> Hi, im a react app</h1> 

      <Person name="Kevin" age="36"> My hobbies are : skiing and food</Person> 
      <Person name="Max" age="28"> </Person>
      <Person name="Rodney" age="19"> My hobbies are : Saxaphone and Hockey </Person>
      </div>
    );
  }
}

export default App;
