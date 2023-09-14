import React, { useState }  from 'react'
import axios from 'axios'

const Form = () => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")
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
                
            })
            .catch(err => {
                console.log(err)
            })
            setTitle("")
            setPrice(0)
            setDescription("")
  }
  return (
    <div style={{padding:'10px'}}>
        <h1>Product Manager</h1>
        <form onSubmit={onSubmitProduct} >
            <div>Title: <input value={title} onChange={(e) => { setTitle(e.target.value) }} /></div>
           <div style={{padding:'10px'}}> Price : <input type='number' value={price} onChange={(e) => { setPrice(e.target.value) }} /></div>
           <div style={{paddingBottom:'10px'}}>Description: <input value={description} onChange={(e) => { setDescription(e.target.value) }} /></div>
            <button style={{width:'100px'}}>Create</button>

        </form>


    </div>
  )
}

export default Form