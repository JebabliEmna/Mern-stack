import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
        <h3>
            <Link to={"/player/list"}>List | </Link>
            <Link to={"/player/addplayer"}>Add Player</Link>
        </h3>
       


    </div>
  )
}

export default Nav