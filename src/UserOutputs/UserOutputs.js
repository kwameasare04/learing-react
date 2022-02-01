import React from 'react';

const userOutputs = (props) =>{
return (
    <div className='UserOutputs'>
        <p> paragraph one</p>
        <p> paragraph two from {props.username} </p>
        <p></p>
    </div>
);

};


export default userOutputs;