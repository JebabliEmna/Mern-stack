
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Display = () => {
    const [authors, setAuthors] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
            .then(res => {
                console.log(res.data.allAuthors)
                setAuthors(res.data.allAuthors)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const justDelete = (id) => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
        //1:filter 
        const filterAuthors = authors.filter((oneauth) => {
            if (oneauth._id === id) {
                return false
            } else {
                return true

            }
        })
        setAuthors(filterAuthors)
    }

    
    return (
            <div style={{display:'block'}}>
                <Link to={"/new"}>add an author</Link>
                <p className="text-danger-emphasis">We have quotes by:</p>
           
              <table className="table table-bordered border-primary table-striped table-hover border border-black">
              <tr>
                 <th>Author</th>
                 <th>Actions available</th>
               </tr>
               <tbody>
               {
                   authors.map((auth) => {
                    return <tr  key={auth._id}>
                       <td className="text-danger-emphasis">{auth.name}</td>
                       <td > 
                           <button className="btn btn-danger me-3" onClick={() => { justDelete(auth._id) }} >Delete</button>
                           <Link to={"/edit/" + auth._id}><button className="btn btn-primary">edit</button></Link>


                       </td>
                       </tr>
    
                })
                }
                </tbody>
             </table>
            
            
        
            </div>
    )
}


export default Display