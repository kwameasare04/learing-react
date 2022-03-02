import React, {Component} from "react";
import Person from './Person'

class People  extends Component {

//   static getDerivedStateFromProps(props,state){
//     console.log('[Person.js] getDerivedStateFromProps');
//      return state;
// }

shouldComponetUdate(){
    return true;
}

getSnapshotBeforeUpdate(){
    console.log('[Person.js] getSnapshotBeforeUpdate ');
    return null;
}

componentDidUpdate(){
    console.log('[Person.js] componentDidUpdate ');

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