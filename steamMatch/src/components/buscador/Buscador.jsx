import { useEffect, useState } from "react";
import "./Buscador.css";
import useDebounce from "../../hooks/useDebounce";

const API_KEY = import.meta.env.VITE_RAWG_KEY;

const adaptarJuego = (juego) => ({
  id: `rawg-${juego.id}`,
  rawgId: juego.id,
  nombre: juego.name,
  imagen: juego.background_image,
});

function Buscador({ onAgregar }) {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  const busquedaRetrasada = useDebounce(busqueda, 400);

  useEffect(() => {
    if (busquedaRetrasada.trim() === "") {
      setResultados([]);
      return;
    }

    const controller = new AbortController();
    const url = `https://api.rawg.io/api/games?search=${encodeURIComponent(busquedaRetrasada)}&tags=multiplayer,co-op&page_size=10&key=${API_KEY}`;

    const buscar = async () => {
      setCargando(true);
      setError(null);
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data = await res.json();
        setResultados(data.results.map(adaptarJuego));
        setCargando(false);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError("No se pudo buscar. Probar de nuevo");
        setCargando(false);
      }
    };

    buscar();

    return () => controller.abort();
  }, [busquedaRetrasada]);

  return (
    <div>
      <label htmlFor="busqueda">Busca el juego</label>
      <input
        id="busqueda"
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Busca el nombre del juego"
      />

      {cargando && <p>Buscando...</p>}
      {error && <p>{error}</p>}

      <ul>
        {resultados.map((juego) => (
          <li
            key={juego.id}
            onClick={() => onAgregar(juego)}
            className="tarjeta"
          >
            <img
              src={juego.imagen}
              alt={juego.nombre}
              className="tarjetaImagen"
            />
            {juego.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Buscador;
