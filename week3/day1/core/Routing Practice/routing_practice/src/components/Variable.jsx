import React from 'react'
import { useParams } from "react-router-dom";
const Variable = () => {
    const {variable,color,bgColor}= useParams();
  return (
    <div>{
          isNaN(variable) ?

        <h1 style={
          color? 
          {color: color, 
          backgroundColor: bgColor}
          :null }>
          The word  is : {variable}
        </h1>
        :
        <h1>The Number  is : {variable}</h1>
        }
    </div>
  )
}

export default Variable