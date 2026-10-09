import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/header/Header.jsx'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './components/navBar/NavBar.jsx'

const App = () => {
  const [count, setCount] = useState(0)
  
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
