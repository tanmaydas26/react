import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const spanGap = {
    paddingLeft: "10px",
  };
  
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount(count + 1)
  }

  const lessCount = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>Count : {count}</h1>
      <span><button className='btn btn-primary' onClick={addCount}>+</button></span>
      <span style={spanGap}><button className='btn btn-danger' onClick={lessCount}>-</button></span>
    </>
  )
}

export default App
