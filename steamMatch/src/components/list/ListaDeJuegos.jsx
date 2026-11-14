import "./ListaDeJuegos.css";

function ListaJuegos({ juegos, onQuitar }) {
  return (
    <div>
      <h2>Mi lista</h2>
      {juegos.length === 0 ? (
        <p>Todavía no hay juegos</p>
      ) : (
        <ul>
          {juegos.map((juego) => (
            <li key={juego.id}>
              {juego.nombre}
              <button onClick={() => onQuitar(juego.id)}>✕</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaJuegos;
