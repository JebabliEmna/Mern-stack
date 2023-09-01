import React from 'react'

const Main = (props) => {
  return (
    <div style={{height: '400px',
    width: '700px',
    backgroundColor: 'red',
    display: 'inline-block',
    verticalAlign : 'top', 
    margin : '10px',}}>

        {props.children}
          
    </div>
  )
}

export default Main