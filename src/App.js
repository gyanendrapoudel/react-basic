import { useState } from 'react';
import './App.css';
import Name from './Hooks/1.UseState'

function App() {
   const lastName="Poudel"
   const [counter, setCounter] = useState(5)
  return (
    <div>
      <h3>Hello from</h3>
      <Name lName={lastName} />
      <h3>Counter = {counter}</h3>
      <button onClick={()=>{setCounter(counter+1)}}>+</button>
      <button onClick={()=>{setCounter(counter-1)}}>-</button>

    </div>
  )
}

export default App;
