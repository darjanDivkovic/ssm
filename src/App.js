import './App.css';
import { useState } from 'react'

import Loader from './Components/Loader'
import Home from './Components/Home'

function App() {

  const [isLoaded, setIsLoaded] = useState(true)
  const [level, setLevel] = useState(5)
  console.log(isLoaded)
  console.log(level)
  return (
    <div className='main'>
      {/* 
        <button onClick={()=> setIsLoaded(prevIsLoaded => !prevIsLoaded)}>
              Change is loaded
        </button>
        <button onClick={() => setLevel(prevLevel => prevLevel > 0 ? --prevLevel : prevLevel)}>-</button>
        <button onClick={() => setLevel(prevLevel => prevLevel < 10 ? ++prevLevel : prevLevel)}>+</button>
      */}
      {!isLoaded ? <Loader level={level}/> : <Home />}
    </div>
  );
}

export default App;

/*


*/