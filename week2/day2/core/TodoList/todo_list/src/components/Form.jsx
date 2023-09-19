import React, { useState } from 'react'

const Form = (props) => {
  const [task, setTask] = useState("")
  const submitTask = (e) => {

    e.preventDefault()
    const newtask ={
        task
    }

    props.updateTasks(newtask)
    setTask('')
}



  return (
  
      <form onSubmit={submitTask} >
        <div>
          <input  style={{backgroundColor:'LightGray',
                          with:'500px',
                          height:'30px',
                          borderRadius:'10%'}} onChange={(e) => { setTask(e.target.value) }} value={task}/>
                          <button>delete</button>
        </div>
        <button type='submit' style={{backgroundColor:'rgb(0,25,248)'}}>Add</button>
        </form>
    
  )
}

export default Form