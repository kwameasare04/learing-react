import React from "react";
import classes from './Cockpit.css'

const cockpit = (props)=>{
    let classesArray = [];
    let btnClass = '';
    if(props.showPerson){
        btnClass = classes.Red
    }
    if(props.people.length <= 2){
      classesArray.push(classes.red)
    }
    if(props.people.length <= 1){
      classesArray.push(classes.bold); /// change syntax so that it references the classes 
    }
return (
    <div className={classes.Cockpit}>
    <h1> Rêæčt!!!</h1> 
        {/* onClick added that calls the event handler function when button is clicked */}
        <p className={classesArray.join(' ')}>my first React Application!!! </p> 
        {/* links it to css element defined in app.css */}
      <button 
      className={btnClass}
       ////referencing the style const create
      //// calls toggle person handler
      onClick={props.clicked}>toggle people!</button>  
     </div>
);
};

export default cockpit;