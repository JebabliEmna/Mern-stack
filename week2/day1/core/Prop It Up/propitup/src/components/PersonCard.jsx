import  React from 'react';
const PersonCard=(props)=> {
    return(
        <div>
            <h1>{props.surname}, {props.name}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor} </p>
        </div>
    )
}
export default PersonCard ;
