import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate,useParams } from 'react-router-dom'

const Details  = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/product/${id}`)

            .then(res => {
                console.log(res.data.oneproduct)
                setProduct(res.data.oneproduct)
            })
            .catch(err => {
                console.log( err)
            })




    }, [id])
    const deleteHandler = () => {
        axios.delete(`http://localhost:5000/api/product/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    }

  return (
    <div>
        <h1>{product.Title}</h1>
        <p>Price: ${product.price}</p>
        <p>Description: {product.Description}</p>
        <button onClick={deleteHandler}>Delete</button>
        
    </div>
  )
}

export default Details 