import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/nav'
import MainPart from './components/mainPart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainPart />
    </>
  )
}

export default App
