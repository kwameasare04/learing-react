import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person'; /// A statement that imports "Person" from the Person.js file

const app = props =>{ 
  const [personState, personSetState] =  useState({
    people: [
          {name: 'Kevin', age:'36'},  
          {name: 'Max', age:'28'},
          {name: 'Rodney', age:'19'}
        ]});

  const switchNameHandler = () =>{ ////event handler function 
    // console.log("switch name");
    personSetState({
      people: [
        {name: 'Kevin', age:'37'},  
        {name: 'Maxim', age:'29'},
        {name: 'Rodney', age:'20'}
      ]
    })

  }


    return (/// properties added to the person tags
<div className='App'> 

      <h1> Hi, im a react app</h1> 
        {/* onClick added that calls the event handler function when button is clicked */}
      <button onClick={switchNameHandler}>click me!</button>

      <Person name = {personState.people[0].name} age={personState.people[0].age}> My hobbies are : skiing and food </Person> 
      <Person name={personState.people[1].name} age={personState.people[1].age}> </Person>
      <Person name={personState.people[2].name}age={personState.people[2].age}> My hobbies are : Saxaphone and Hockey </Person>
      
      </div>
    
    );
  }

/// "this" in the name and age attribute refers to this class. state the object in the class and the people array in the object.
export default app;
// const app = props => { /// person tag in this funtion is a self closing tag
//   state = {
//     people: [
//       {name: 'Kevin', age:'36'},  
//       {name: 'Max', age:'28'},
//       {name: 'Rodney', age:'19'}
//     ]
//   } /// state object accepts any type of data 


//   switchNameHandler = () =>{ ////event handler function 
//     // console.log("switch name");
//     this.setState({
//       people: [
//         {name: 'Kevin', age:'37'},  
//         {name: 'Maxim', age:'29'},
//         {name: 'Rodney', age:'20'}
//       ]
//     })

//   }