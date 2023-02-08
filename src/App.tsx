import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Effect from './components/Effect'
import { SimpleGrid } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <SimpleGrid minH={"100vh"} gridTemplateRows={"auto 1fr auto"}>

    <Effect/>
    </SimpleGrid>
  )
}

export default App
