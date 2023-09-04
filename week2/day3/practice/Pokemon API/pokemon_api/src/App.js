
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [pok, setPok] = useState([])
  useEffect (() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(res => {
        return res.json()
      }).then(res => {
        console.log(res.results)
          
        setPok(res.results)

      })
      .catch(err => {
        console.log(err);
      })

  },[])
 

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
