import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
        <h3>
            <Link to={"/player/status/game/1"}>Game1 | </Link>
            <Link to={"/player/status/game/2"}>Game2 | </Link>
            <Link to={"/player/status/game/3"}>Game3 | </Link>
        </h3>
       


    </div>
  )
}

export default Nav