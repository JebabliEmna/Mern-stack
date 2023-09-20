import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from './Nav'



const Display = () => {
    const [players, setPlayers] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:1337/api/player")
            .then(res => {
                console.log(res.data)
                setPlayers(res.data.allPlayers)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const justDelete = (id) => {
        axios.delete(`http://localhost:1337/api/player/${id}`)
        //1:filter 
        const filterPlayers = players.filter((oneplay) => {
            if (oneplay._id === id) {
                return false
            } else {
                return true

            }
        })
        setPlayers(filterPlayers)
    }

    
    return (

            <div style={{display:'block'}}>
           <Nav/>
              <table className="table table-bordered border-primary table-striped table-hover border border-black">
              <tr>
                 <th>Team Name</th>
                 <th>Preferred Position</th>
                 <th>Actions</th>
               </tr>
               <tbody>
               {
                   players.map((player) => {
                    return <tr  key={player._id}>
                       <td className="text-danger-emphasis">{player.Name}</td>
                       <td className="text-danger-emphasis">{player.Position}</td>
                       <td > 
                           <button className="btn btn-danger" onClick={() => { justDelete(player._id) }} >Delete</button>
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