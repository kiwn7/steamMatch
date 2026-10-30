import { useState } from 'react'
import './lista.css'

function listaJuegos(){
    const [nombreJueog, setNombreJuego] = useState("");

    return(
        <div>
            <label htmlFor="juego">Busca el juego</label>
            <input 
                id="nombreJuego"
                type="text"
                value={nombreJuego}
                onChange={(e) => setNombreJuego(e.target.value)}
                placeholder='Busca el nombre de tu videojuego'
            />
        </div>
    )
}