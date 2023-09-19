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

    const justDelete = (id) => {
        axios.delete(`http://localhost:5000/api/product/${id}`)
        //1:filter 
        const filtereProducts = products.filter((oneprod) => {
            if (oneprod._id == id) {
                return false
            } else {
                return true

            }
        })
        setProducts(filtereProducts)
    }

    return (
            <div>
                <hr/>
                <h1>All Products:</h1>
                {
                   products.map((prod) => {
                    return <div style={{padding:'10px'}} key={prod._id}>
                       <Link to={"/" + prod._id}>{prod.Title}</Link >
                       <Link to={"/edit/" + prod._id}>edit</Link>
                       <div style={{paddingLeft:'5px'}}>
                        <button onClick={() => { justDelete(prod._id) }}>Delete</button>
                       </div>
                    </div>
    
                })
                }
            </div>
    )
}

export default List
