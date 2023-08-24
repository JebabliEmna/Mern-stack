
import './App.css';
import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className="App">
      <PersonCard surname={"Doe"} name={"Jane"} age={45} hairColor={"Black"}/>
      <PersonCard surname={"Smith"} name={"John"} age={88} hairColor={"Brown"}/>
      <PersonCard surname={"Fillmore"} name={"Millard"} age={50} hairColor={"Brown"}/>
      <PersonCard surname={"Smith"} name={"Maria"} age={62} hairColor={"Brown"}/>
      
    </div>
  );
}

export default App;
