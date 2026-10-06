import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/header/header.jsx'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Header />
  )
}

export default App
