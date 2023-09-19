import './App.css';
import Display from './components/Display';
import Create from './components/Create';
import { Route, Routes } from "react-router-dom";
import Edit from './components/Edit';

function App() {

  return (
    <div className="App">
      <h1 >Favourite authors</h1>
      <Routes>
          <Route path="/" element={<Display />} />
          <Route path="/new" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      
    </div>
  );
}

export default App;

