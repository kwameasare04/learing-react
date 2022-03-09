import React, {useEffect} from "react";
//// useEffect runs for every render cycle of component
import classes from './Cockpit.css'

const cockpit = (props)=>{
  
//   useEffect(()=>{
//    ///This runs for every re-render cycle
//     console.log("[cockpit.js] useEffect");
//     setTimeout(()=>{
//       alert("tomatoes are green");
//     }, 1000);
//  },[props.people]);
//  ////only renders when the people component is rendered 

 useEffect(()=>{
  ///This runs for every re-render cycle
   console.log("[cockpit.js] useEffect");
   const timer = setTimeout(()=>{
     alert("tomatoes are green");
   }, 1000);
   return () => {
     clearTimeout(timer);
     console.log('[Cockpit.js] cleanup work in useEffect')
   }
},[]);
///is only rendered the first time passing an empty array, this tells react this effect has no dependancies 

useEffect(()=>{
  console.log("[cockpit.js] 2nd useEffect");
  return () => {
    console.log('[Cockpit.js] cleanup work in 2nd useEffect')
  }
})


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
    <h1> {props.title} </h1> 
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