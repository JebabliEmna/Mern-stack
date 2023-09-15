import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const List = (props) => {
    const [products, setProducts] = useState([])
    const {refreshState} = props

    useEffect(() => {
        axios.get("http://localhost:5000/api/product")
            .then(res => {
                console.log(res.data.allProducts)
                setProducts(res.data.allProducts)
            })
            .catch(err => {
                console.log(err)
            })
    }, [refreshState])

    return (
            <div>
                <hr/>
                <h1>All Products:</h1>
                {
                   products.map((prod) => {
                    return <div key={prod._id}>
                       <Link to={"/" + prod._id}>{prod.Title}</Link >
                    </div>
    
                })
                }
            </div>
    )
}

export default List
