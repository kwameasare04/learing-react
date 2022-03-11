import React, {Component} from 'react'; // have to import react to use any features
import classes from "./Person.css" /// have to import css file to use it
import Aux from '../../../hoc/Aux'
class Person extends Component  { /// function returns a paragraph with the property name and age in statement
    // const random = Math.random();
    // if(random > 0.7) {
    //     throw new Error("Error test!!!")
    // }

   render(){
    console.log('[person.js] rendering...')
    return(
     <Aux>

       <p key={"item1"} onClick={this.props.click}> hello i'm {this.props.name} and i am {this.props.age} years old!</p>
        <p key={"item2"}>{this.props.children}</p>      
        <input key={"item3"} type="text" onChange={this.props.changed} value={this.props.name}/>
     </Aux>
        );     
           }
}
          
    
// props.children Allows for content to be added from outside person.js file
export default Person; /// Makes person the default export in the file.


        //  /* dynamic content that returns properties name and age */
        //  <div className={classes.Person}> {/* giving div class name so it can be targeted in css file}
        //  {/*onClick being assigned to property the person element*/}