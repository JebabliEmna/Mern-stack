
import './App.css';
import Main from './views/Main';
import { Route, Routes } from 'react-router-dom';
import Details from './views/Details ';
import Update from './views/Update';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
      
    </div>
  );
}

export default App;
