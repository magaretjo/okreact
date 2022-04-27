import { useState } from 'react'

function Section(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>{props.name}, Welcome Vite + React!</p>
      <p>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>
      <p>
        Edit <code>App.jsx</code> and save to test HMR updates.
      </p>
    </>      
  );
}

export default Section;