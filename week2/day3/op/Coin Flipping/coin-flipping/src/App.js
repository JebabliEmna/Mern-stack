
import './App.css';

function App() {
  function tossCoin() {
        return Math.random() > 0.5 ? "heads" : "tails";
    }
    function fiveHeads() {
        return new Promise( (resolve, reject) => {
              let count=0 , i=0 ,j=0
              while(i<100 )
              {
                while(j<5)
                {let result=tossCoin()
                console.log(result)
                if (result==="heads")
                     count++
                j++}
                if (count===5)
                resolve("we have won")
              i++
      }
      reject("you have lost")
          });
      }
      fiveHeads()
      .then( res => console.log(res) )
      .catch( err => console.log(err) );
      console.log( "When does this run now?" );
      
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
