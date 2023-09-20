
import './App.css';
import { Link } from 'react-router-dom'
import { Route, Routes } from "react-router-dom"
import Display from './components/Display';
import Nav from './components/Nav';
import Create from './components/Create';
import Nav2 from './components/Nav2';
import Status2 from './components/Status2';
import Status3 from './components/Status3';
import Status1 from './components/Status1';

function App() {
  return (
    <div className="App">
      <h1>
        <Link to={"/player"}>Manage Players | </Link>
        <Link to={"/status"}>Manage Player Status</Link>
        
      </h1>
      
     <Routes>
          <Route path="/player" element={< Nav/>} />
          <Route path="/player/list" element={< Display/>} />
          <Route path="/player/addplayer" element={< Create/>} />
          <Route path="/status" element={< Nav2/>} />
          <Route path="/player/status/game/1" element={<Status1/>} />
          <Route path="/player/status/game/2" element={< Status2/>} />
          <Route path="/player/status/game/3" element={< Status3/>} />
      </Routes>

    </div>
  );
}

export default App;
