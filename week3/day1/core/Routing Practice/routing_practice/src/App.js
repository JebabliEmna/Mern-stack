
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Variable from './components/Variable';
function App() {
  return (
      <div className="App">

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:variable" element={<Variable/>}/>
        <Route path="/:variable/:color/:bgColor" element={<Variable/>}/>

      </Routes>
      </div>
  );
}

export default App;
