import React, { useState }  from 'react'
import axios from 'axios'

const Form = (props) => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")
  const [errors, setErrors] = useState([]); 
  const { refresh } = props
 
  const onSubmitProduct = (e) => {
    e.preventDefault()
    const newproduct = {
        Title: title,
        price,
        Description : description
    }
    axios.post("http://localhost:5000/api/product", newproduct)
            .then(res => {
                console.log("your Product is created  ✅") 
                refresh()
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
            setTitle("")
            setPrice(0)
            setDescription("")
           
  }
  return (
    <div style={{padding:'10px'}}>
        <h1>Product Manager</h1>
        <form onSubmit={onSubmitProduct} >
        <div style={{ color: "red" }}>{errors.map((err, index) => <p key={index}>{err}</p>)}</div>
            <div>Title: <input value={title} onChange={(e) => { setTitle(e.target.value) }} /></div>
           <div style={{padding:'10px'}}> Price : <input value={price} onChange={(e) => { setPrice(e.target.value) }} /></div>
           <div style={{paddingBottom:'10px'}}>Description: <input value={description} onChange={(e) => { setDescription(e.target.value) }} /></div>
            <button style={{width:'100px'}}>Create</button>
      
        </form>

    </div>
  )
}

export default Form