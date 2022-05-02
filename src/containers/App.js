import React, { Component } from 'react';
import classes from './App.css'; // with the modifications made in the config files can target specific components
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import People from '../components/People/Person/People';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
//import Radium, {StyleRoot}  from 'radium'; /// A package that lets you use inline styles with sudo selectors and media quries!!! e.g. hover

class App extends Component { /// person tag in this funtion is a self closing tag
constructor(props){ 
  super(props);
  console.log('[app.js} constructor')
  ///Constructor method also used for initialising state. Also don't use setState!!
  this.state = { 
    people: [
      {id: 'qwe', name: 'Kevin', age: 26},   //////added unique id's to people object array to help react identify different componets
      {id: 'dcv',name: 'Max', age:28},
      {id: 'yhu',name: 'Rodney', age: 19}  
    ],
    showPerson: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false 
  } /// state object accepts any type of data  
}

static getDerivedStateFromProps(props, state){
console.log('[App.js] getDerivedStateFromProps' , props)
return state;
};

componentDidMount(){
  console.log('[App.js] componentDidMount');

};

shouldComponentUpdate(nextProps,nextState){
  console.log('[App.js] shouldComponentUpdate');
  return true;
}


componentDidUpdate(){
  console.log('[App.js] componentDidUpdate');
};

  /// this method removes an element from the array and returns update people array
deletePersonHandler = (personIndex) =>{
// const people = this.state.people; /// Don't do this!! As you are changing original array and leads to unpridictable code!!
const people = [...this.state.people]; /// Good practice as create a copy and are not changing original array
// const people = this.state.people.slice(); /// can do this as well as it is immutable 
people.splice(personIndex, 1)
this.setState({people:people})
}


// //// changeNameHandler is almost identical to switchNameHandler with exception of event parameter
//   changeNameHandler = (event) => {
//     this.setState({
//       people: [
//         {name: "Kevin", age:'37'},  
//         {name: event.target.value, age:'29'},  ///name being changed by extracting the input element which is event.target ad its value with .value
//         {name: 'Rodney', age:'20'}
//       ]
//     })
 
//   }

  nameChangedHandler = (event,id) =>{
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id
    }) /// returns the index of the value being targeted 
    const persons = {
      ...this.state.people[personIndex]
    } ////stores value of the index being targeted
    persons.name = event.target.value; /// changes value of persons name to the target value
    const people = [ ...this.state.people ]; ///create a copy of the people array
    people[personIndex] = persons; /// change the value of slescted index in the copied array
    this.setState((prevState, props)=>{
     return { people:people,
         changeCounter: prevState.changeCounter + 1};
        }
    )}; /// how to change the state value when changing multiple values
  
  

  togglePersonHandler = () =>{
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow}); ///changes showPerson to value it is not currently set too
  };

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  render() {
    console.log('[App.js] render method')
    let persons = null; /// set person to null by default
    // let btnClass = '';

////returns person variable that is rendered when show person in state is true
    if(this.state.showPerson === true){
///// the person maps out the contents of the people array in state, each iteration produces a Person component with person.name and person.age
      persons =  <People
          people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
          />;      
    } 
    return (
      <Aux>
    <button onClick={()=>{this.setState({showCockpit: false})}}> remove cockpit </button>
      {this.state.showCockpit ? <Cockpit 
      title={this.props.title}
      showPerson={this.state.showPerson}
      peopleLength={this.state.people.length}
      clicked={this.togglePersonHandler}
      login={this.loginHandler}
      /> : null} 
      {persons}
 
      </Aux>
     
    );
  }
}
/// "this" in the name and age attribute refers to this class. state the object in the class and the people array in the object.
export default withClass(App, classes.App); // 1)To us you must call radium as a Function and wrap it around app.
////////2)This is called a higher order component and is used to add some more functionality to your app component.
 


 




