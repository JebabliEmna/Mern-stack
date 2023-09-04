import Axios from "axios"
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [pok, setPok] = useState([])
  useEffect (() => {
    Axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(res => {
  
        console.log(res.data.results)
        setPok(res.data.results)
      }).catch(err => {
        console.log(err)
      })

  }, [])
      
  return (
    <div className="App">
      <ul >
        { pok.map((poké,index) => {
          return (
            <li key={index}>{poké.name}</li>
          )
        })
        }
      </ul>
      
    </div>
  );
}

export default App;
