import React from 'react'; // have to import react to use any features

const person = (props) => { /// function returns a paragraph with the property name and age in statement
return (
/* dynamic content that returns properties name and age */
<div>
    
     <p onClick={props.click} ///// onClick being assigned to property the person element
     > i'm a {props.name} and i am {props.age} </p>  

     <p>{props.children}</p>

</div>
)
}
// props.children Allows for content to be added from outside person.js file
export default person; /// Makes person the default export in the file.


