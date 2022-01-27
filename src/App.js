import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'; /// A statement that imports "Person" from the Person.js file
/// turn class into functional component
const app = props =>{ 

  /// use state is the hook that allows state to be managed functionally
  const [personState, personSetState] =  useState({
    //// useState needs two parameters, the first is the state being set. the second a way for state to be updated.
    //// useState is being destructured into personState and setPersonState
    people: [
          {name: 'Kevin', age:'36'},  
          {name: 'Max', age:'28'},
          {name: 'Rodney', age:'19'}
        ]});

  const switchNameHandler = () =>{ ////event handler function being stored as a constant
    // console.log("switch name");
    personSetState({
      people: [
        {name: 'Kevin', age:'37'},  
        {name: 'Maxim', age:'29'},
        {name: 'Rodney', age:'20'}
      ]
    })

  }

//// No render method, just return jsX
    return (/// properties added to the person tags
<div className='App'> 

      <h1> Hi, im a react app</h1> 
        {/* onClick added that calls the event handler function when button is clicked, this.switchHandler no longer needed as not in class */}
      <button onClick={switchNameHandler}>click me!</button>

      <Person name = {personState.people[0].name} age={personState.people[0].age}> My hobbies are : skiing and food </Person> 
      <Person name={personState.people[1].name} age={personState.people[1].age}> </Person>
      <Person name={personState.people[2].name}age={personState.people[2].age}> My hobbies are : Saxaphone and Hockey </Person>
      
      </div>
    
    );
  }

export default app;
