
import './App.css';
import Main from './views/Main';
import { Route, Routes } from 'react-router-dom';
import Details from './views/Details ';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/MoreDetails/:id" element={<Details />} />
      </Routes>
      
    </div>
  );
}

export default App;
