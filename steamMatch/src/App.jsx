import './App.css'
import Header from './components/header/Header.jsx'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './components/navBar/NavBar.jsx'
import Buscador from './components/buscador/Buscador.jsx'

const App = () => {
  
  
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path='/' element={<Buscador />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App