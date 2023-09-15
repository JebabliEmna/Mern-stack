import React from 'react'
import Form from '../components/Form'
import List from '../components/List'
import { useState } from 'react'

const Main = () => {
  const [refreshState, setRefreshState] = useState(false)

  const refresh = () => {
     setRefreshState(!refreshState)
  }
  return (
    <div>
      <Form refresh={refresh}/>
       <List refreshState={refreshState}/> 
    </div>
    
  )
}

export default Main