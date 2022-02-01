import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; /// A statement that imports "Person" from the Person.js file
import UserOutputs from './UserOutputs/UserOutputs.js';
import UserInputs from './UserInputs/UserInputs.js';
import './UserInputs/UserInputs.css';
import './UserOutputs/UserOutputs.css';

class App extends Component { /// person tag in this funtion is a self closing tag
  state = {
    people: [
      {name: 'Kevin', age:'36'},  
      {name: 'Max', age:'28'},
      {name: 'Rodney', age:'19'}
    ],
    UserName: [
     {username: 'boobootheclown'}
    ]
  } /// state object accepts any type of data 


  switchNameHandler = (newName) =>{ ////event handler function 
    // console.log("switch name");
    this.setState({
      people: [
        {name: newName, age:'37'},  
        {name: 'Maxim', age:'29'},
        {name: 'Rodney', age:'20'}
      ]
    })

  }
//// changeNameHandler is almost identical to switchNameHandler with exception of event parameter
  changeNameHandler = (event) => {
    this.setState({
      people: [
        {name: "Kevin", age:'37'},  
        {name: event.target.value, age:'29'},  ///name being changed by extracting the input element which is event.target ad its value with .value
        {name: 'Rodney', age:'20'}
      ]
    })
 
  }

  editUserNameHandler = (event) => {
    this.setState({
      UserName: [
        {username: event.target.value}
      ]
    })
  }


  render() {
/// created inline syle which is used by the button attribute
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (/// properties added to the person tags
<div className='App'> 

      <h1> Hi, im a react app</h1> 
        {/* onClick added that calls the event handler function when button is clicked */}
      <button 
      style={style} ////referencing the style const create
      onClick={this.switchNameHandler.bind(this, "Tiffany")}>click me!</button> 

      <Person name ={this.state.people[0].name} 
      click={this.switchNameHandler.bind(this, "Kimberly")} /// adding switchName property to element bind method is used to set the newName which is then updated 
      age={this.state.people[0].age}> My hobbies are : skiing and food </Person> 

      <Person name={this.state.people[1].name}
      click={this.switchNameHandler.bind(this, 'Marcus')}
       age={this.state.people[1].age}
       change={this.changeNameHandler}>
       </Person>

      <Person name={this.state.people[2].name}
      age={this.state.people[2].age}> My hobbies are : Saxaphone and Hockey </Person>
      
      <UserOutputs username={this.state.UserName[0].username} ></UserOutputs>
      <UserInputs change={this.editUserNameHandler} username={this.state.UserName[0].username}></UserInputs>
      </div>
    
    );
  }
}
/// "this" in the name and age attribute refers to this class. state the object in the class and the people array in the object.
export default App;



////Create two new componts: UserInputs and UserOutputs
////UserInputs should hold and input element,UserOutputs two paragraph elements
///Output multiple UserOutput components in the App component (any paragraph or text)
////Pass a username of your choice to UserOutput via props and display it there
////Add state to the app componet (=> the username) and pass the username to the USerOutput component
///Add a method to manipulate the state (=> an event handler method)
////Pass the event handler method reference to the UserInputs component and bind it to the input-change event
/////Ensure that the new input entered by the user overwrited tho old username passed to the output
////Add two way binding to your input(in UserInput) to also display the starting user name
///// Add styling of your choice to component elements in the components