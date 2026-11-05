import { useState } from "react";

function useJuegosElegidos() {
    const [juegosElegidos, setJuegosElegidos] = useState([])

    const agregarJuego = (juego) => {
        const yaExiste = juegosElegidos.some((j) => j.id === juego.id)
        if (!yaExiste){
            setJuegosElegidos([...juegosElegidos, juego])
        }
    }

    const quitarJuego = (id) => {
        setJuegosElegidos(juegosElegidos.filter((j) => j.id !== id))
    }

    return { juegosElegidos, agregarJuego, quitarJuego}
}

export default useJuegosElegidos