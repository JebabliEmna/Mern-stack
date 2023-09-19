import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  const { id } = useParams()
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")
  const navigate = useNavigate()
  const [errors, setErrors] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:5000/api/product/${id}`)

            .then(res => {
              const { Title, price, Description} = res.data.oneproduct 
              console.log(res.data)
              setTitle(Title)
              setPrice(price)
              setDescription(Description)
          
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

  const UpdateProduct = (e) => {
    e.preventDefault()
    const newproduct = {
        Title: title,
        price,
        Description : description
    }
    axios.put(`http://localhost:5000/api/product/${id}`, newproduct)
            .then(res => {
                console.log("your Product is updated  ✅") 
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
    <div  style={{padding:'10px'}}>
        <h1>Product Manager</h1>
        <form onSubmit={UpdateProduct} >
          {errors.map((err, index) => <p key={index}>{err}</p>)}
            <div>Title: <input value={title} onChange={(e) => { setTitle(e.target.value) }} /></div>
           <div style={{padding:'10px'}}> Price : <input value={price} onChange={(e) => { setPrice(e.target.value) }} /></div>
           <div style={{paddingBottom:'10px'}}>Description: <input value={description} onChange={(e) => { setDescription(e.target.value) }} /></div>
            <button style={{width:'100px'}}>Create</button>
      
        </form>
    </div>
  )
}

export default Update




