import { useState } from 'react'
import './ListaDeJuegos.css'

function listaJuegos({juegos}){
    return(
        <div>
            <h2>Mi lista</h2>
            {juegos.map((juego) => (
                    <li key={juego.id} onClick={() => onAgregar(jugeo)}>
                        {juego.nombre}
                    </li>
            ))}
        </div>
    )
}

export default listaJuegos