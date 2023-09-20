import React, { useState }  from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import Nav from './Nav'


const Create = (props) => {
  const [name, setName] = useState("")
  const [position, setPosition] = useState("")
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate()

 
  const onSubmitPlayer= (e) => {
    e.preventDefault()
    const newPlayer = {Name : name ,
                       Position : position}
    axios.post("http://localhost:1337/api/player", newPlayer)
            .then(res => {
                console.log("the auther is added ✅") 
                navigate("/player/list")
            })
            .catch(err => {
                
              //console.log(err)
              const errorResponse = err.response.data.errors; // Get the errors from err.response.data
              const errorArr = []; // Define a temp error array to push the messages in
              for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                  errorArr.push(errorResponse[key].message)
              }
              // // Set Errors
              setErrors(errorArr);
              
            })
           
  }
  return (
    <div  >
        <Nav/>
        
        <form className="border border-dark-subtle p-2" style={{width:'350px'}} onSubmit={onSubmitPlayer} >
        <div  style={{ color: "red" }}>{errors.map((err, index) => <p key={index}>{err}</p>)}</div>
        <h3 className="text-danger-emphasis">Add Player:</h3>
                <label>Player Name:</label><br/>
                <div className='py-2'><input value={name} onChange={(e) => { setName(e.target.value) }} /></div>
                <label>Preferred Position:</label><br/>
                <div className='py-2'><input value={position} onChange={(e) => { setPosition(e.target.value) }} /></div>
            <div>
            <button className="btn btn-primary" >Submit</button>
            
            </div>
          
      
        </form>

    </div>
  )
}

export default Create