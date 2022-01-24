import React from 'react'; // have to import react to use any features

const person = () => { /// function that returns javascriptfx 
return <p> i'm a person! and i am {Math.floor(Math.random() * 30)} </p> // added dynamic content that generates random age
}

export default person; /// Makes person the default export in the file.


