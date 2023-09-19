import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Edit = () => {
  const { id } = useParams()
  const [name, setName] = useState("")
  const navigate = useNavigate()
  const [errors, setErrors] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)

            .then(res => {
                console.log(res.data)
                setName(res.data.oneauthor.name)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

  const UpdateAuthor = (e) => {
    e.preventDefault()
    const newauthor = {name}
    axios.put(`http://localhost:8000/api/author/${id}`, newauthor)
            .then(res => {
                console.log("the author is updated ✅") 
                navigate("/")
    
            })
            .catch(err => {
              const errorResponse = err.response.data.errors;
              console.log(errorResponse) // Get the errors from err.response.data
              const errorArr = []; // Define a temp error array to push the messages in
              for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                  errorArr.push(errorResponse[key].message)}
                  setErrors(errorArr);
            }) 
           
  }
  return (
    <div  >
        <p className="text-danger-emphasis">Edit this author:</p>
        <form className="border border-dark-subtle"  style={{width:'350px'}} onSubmit={ UpdateAuthor} >
        <div  style={{ color: "red" }}>{errors.map((err, index) => <p key={index}>{err}</p>)}</div>
                 <div>
                <label >Name:</label><br/>
                <div className='py-2'><input  value={name} onChange={(e) => { setName(e.target.value) }} /></div>
                </div>
        
            <div >
            <button className="btn btn-primary me-3" onClick={() => { navigate("/") }} >Cancel</button>
            <button className="btn btn-primary" >Submit</button>
            
            </div>
          
      
        </form>
    </div>
  )
}

export default Edit




