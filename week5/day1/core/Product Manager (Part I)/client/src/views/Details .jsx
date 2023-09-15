import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Details  = () => {
    const { id } = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5000/api/product/${id}`)

            .then(res => {
                console.log(res.data.oneproduct)
                setProduct(res.data.oneproduct)
            })
            .catch(err => {
                console.log("❌❌", err)
            })




    }, [id])
  return (
    <div>
        <h1>{product.Title}</h1>
        <p>Price: ${product.price}</p>
        <p>Description: {product.Description}</p>
    </div>
  )
}

export default Details 