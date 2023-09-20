import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nav2 from './Nav2'


const Status3 = () => {
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

    return (

            <div style={{display:'block'}}>
                <Nav2/>
              <table className="table table-bordered border-primary table-striped table-hover border border-black">
              <tr>
                 <th>Team Name</th>
                 <th>Actions</th>
               </tr>
               <tbody>
               {
                   players.map((player) => {
                    return <tr  key={player._id}>
                       <td className="text-danger-emphasis">{player.Name}</td>
                       <td > 
                           <button className="btn btn-success me-3">Playing</button>
                           <button className="btn btn-danger me-3">Not Playing</button>
                           <button className="btn btn-warning">Undecided</button>
                       </td>
                       </tr>
    
                })
                }
                </tbody>
             </table>
            
            
        
            </div>
    )
}


export default Status3