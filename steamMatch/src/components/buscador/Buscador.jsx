import { useState } from 'react';
import './Buscador.css';

const JUEGOS = [
  { id: 1, nombre: 'The Forest' },
  { id: 2, nombre: 'The King of Fighters XV' },
  { id: 3, nombre: 'Overcooked 2' },
  { id: 4, nombre: 'It Takes Two' },
  { id: 5, nombre: 'Left 4 Dead 2' },
  { id: 6, nombre: 'Terraria' },
]

function Buscador(){
    const [busqueda, setBusqueda] = useState('');

    return(
        <div>
            <label htmlFor='busqueda'>Busca el juego</label>
            <input
                id='busqueda'
                type='text'
                value={busqueda}
                onChange={(e)=> setBusqueda(e.target.value)}
                placeholder='Busca el nombre del juego'
            />

            
            <ul>
                {JUEGOS.map((juego) => (
                    <li key={juego.id}>{juego.nombre}</li>
                ))}
            </ul>

        </div>

    )
}

export default Buscador