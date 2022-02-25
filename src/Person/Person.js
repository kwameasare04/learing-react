import React from 'react'; // have to import react to use any features
import classes from "./Person.css" /// have to import css file to use it
// import Radium from 'radium';
const person = (props) => { /// function returns a paragraph with the property name and age in statement
return (
/* dynamic content that returns properties name and age */
<div className={classes.person}> {/* giving div class name so it can be targeted in css file}
         {/*onClick being assigned to property the person element*/}
     <p onClick={props.click}> hello i'm {props.name} and i am {props.age} </p>  
     {/* onChange has reference to property change with is a method with a set state function  */}
     {/* assaigning props.name to value makes the name visible from the start */}
     < input type="text" onChange={props.changed} value={props.name}/>
     <p>{props.children}</p>

</div>
)
}
// props.children Allows for content to be added from outside person.js file
export default person; /// Makes person the default export in the file.


 