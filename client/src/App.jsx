import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from '@mui/material/Box';
import RandomText from './components/RandomText';
import Navbar from './components/Navbar';
import Header from './components/Header';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Header />

    </>
  )
}

export default App
