import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Component from './components/Component'

function App(props) {
  const list = ['hello1', 'hello2', 'hello3'];

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Main</h1>
      {
        list.map( (item, index) => (
          <Component value={"Component value=" + item} />
        ))
      }
    </div>
  )
}

export default App
