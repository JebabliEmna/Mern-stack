
import './App.css';
import Form from './components/Form';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([])
  const updateTasks =(newcne)=>{

    setTodoList([...todoList,newcne])
  }

  return (
    <div className="App">
    <Form updateTasks={updateTasks}/>
    {todoList.map((onetask,index) => {
    return (
        <ul key={index} >
          <li>{onetask.task}</li>   
        </ul>)})}

      
    </div>
  );
}

export default App;
