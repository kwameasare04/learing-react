import React, {PureComponent} from "react";
import Person from './Person'

/////PureComponent is a componenont that implements shouldComponentUpdate with complete props Check
class People extends PureComponent {

//   static getDerivedStateFromProps(props,state){
//     console.log('[Person.js] getDerivedStateFromProps');
//      return state;
// }
// componentWillReceiveProps(props){
//   console.log('[Person.js] componentWillReceiveProps', props);
// }
// componentWillUpdate(){

// }

// shouldComponentUpdate(nextProps, nextState){
//   console.log('[people.js] shouldComponentUpdate');
//   return nextProps.people !== this.props.people ||
//   nextProps.people !== this.props.changed       ||
//   nextProps.people !== this.props.people;

  
// }


getSnapshotBeforeUpdate(){
    console.log('[Person.js] getSnapshotBeforeUpdate ');
    return {message: 'Snapshot'};
}

componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Person.js] componentDidUpdate ');
    console.log(snapshot);
}

componentWillUnmount(){
  ///runs just before component is removed
  console.log('[Person.js] componentWillUnmount')
}

  render(){
  console.log('[People.js] rendering person...');
   return this.props.people.map((person, index) => {
        return <Person 
        click={() => this.props.clicked(index)}
        name={person.name} 
        age={person.age}
        key={person.id} //// unique identifier added to key. Would usually be primary key from db
        changed={(event) =>  this.props.changed(event, person.id)}
        ></Person>
      });
    }
  }

      export default People;