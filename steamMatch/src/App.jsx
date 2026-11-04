import './App.css'
import Header from './components/header/Header.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Buscador from './components/buscador/Buscador.jsx'
import ListaJuegos from './components/list/ListaDeJuegos.jsx'
import { useState } from 'react'

const App = () => {
  const [juegosElegidos, setJuegosElegidos] = useState([])

  const agregarJuego = (juego) => {
    setJuegosElegidos([...juegosElegidos, juego])
  }
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Buscador onAgregar={agregarJuego} />}/>
      </Routes>
      <ListaJuegos juegos={juegosElegidos}/>
    </BrowserRouter>
  )
}

export default App