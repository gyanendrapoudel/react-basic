import './App.css';
import Name from './Name.js'

function App() {
   const lastName="Poudel"
  return (
    <div>
      Hello from 
      <Name lName={lastName}/>

    </div>
  );
}

export default App;
