import { Link } from 'react-router-dom'

function App() {
 
  return (
    <>
      <Link to="/">Home</Link> | {" "}
      <Link to="/about">About</Link> | {" "}
      <a href="/">old tag</a>
    </>
  )
}

export default App

