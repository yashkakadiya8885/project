import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Componets/Nav'
import Allroute from './Componets/Allroute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <Allroute/>
    </>
  )
}

export default App
