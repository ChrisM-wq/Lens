import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from '@mui/material/Box';
import RandomText from './components/RandomText';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Discover from './components/Discover';
import Trending from './components/Trending';
import Articles from './components/Articles';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Header />
    <Trending />
    
    <Box sx={{ display: 'flex', px: 40, gap: 10}}>
      <Articles />
      <Discover />
    </Box>
    </>
  )
}

export default App
