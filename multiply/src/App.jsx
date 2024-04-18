import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState(1)

  function multipleByFive() {
setNumber(number*5)
  }

  return (
    <>
      <header>

      </header>
      <main>
<h1>{number}</h1>
<button onClick={multipleByFive}>Multiple by 5</button>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
