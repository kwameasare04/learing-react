import React, {Component} from "react";
import Person from './Person'

const people = (props)=> props.people.map((person, index) => {
        return <Person 
        click={() => props.clicked(index)}
        name={person.name} 
        age={person.age}
        key={person.id} //// unique identifier added to key. Would usually be primary key from db
        changed={(event) =>  props.changed(event, person.id)}
        ></Person>
      });

      export default people;