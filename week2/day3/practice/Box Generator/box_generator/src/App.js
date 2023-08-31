import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App(props) {
  const [colors, setColors] = useState([])
  const updateColors =(newcolor)=>{
    setColors([...colors,newcolor])
  }

  return (
    <div className="App">
        <Form  updateColors={updateColors}/>
        {
    colors.map((onecolor,index) => {
        return (
            <div key={index} style={{
              display:"inline-block",
              margin:'10px',
              height:onecolor.height,
              width:onecolor.width,
              backgroundColor:onecolor.color,}}
               >
                
            </div>
        )
    })
}
    </div>
  );
}

export default App;
