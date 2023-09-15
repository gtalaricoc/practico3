import React, { useState, useEffect } from 'react'; 
//Se hacen las importaciones de los componentes
import Opcion from './Opcion.js';
import OpcionJugador from './OpcionJugador.js'; //Componente para las jugadas del jugador
import OpcionPC from './OpcionPC.js'; //Componente para las jugadas del PC
import { Resultado, BotonReiniciar } from './Estilos.js'; // Importa los estilos
import './Estilos.css'; // Importa el archivo CSS de estilos
import styled from './Estilos.js';


function App() {
  const opciones = ["piedra", "papel", "tijera"];
  const [nombre, setNombre] = useState(""); // Estado para el nombre del jugador
  const [opcionJugador, setOpcionJugador] = useState(null); // Estado para la opción del jugador
  const [opcionPC, setOpcionPC] = useState(null); // Estado para la opción del oponente (PC)
  const [puntosJugador, setPuntosJugador] = useState(0); // Estado para los puntos del jugador
  const [puntosPC, setPuntosPC] = useState(0); // Estado para los puntos del PC
  const [intentos, setIntentos] = useState(0); // Estado para contar los intentos
  const [resultado, setResultado] = useState(""); // Estado para mostrar el resultado de la ronda
  const [juegoTerminado, setJuegoTerminado] = useState(false); // Estado para controlar si el juego ha terminado

  const handleChange = (event) => {
    setNombre(event.target.value);
    
  };

  const handleSeleccion = (Opcion) => {
    if (!juegoTerminado) {
      // Actualiza la opción del jugador
      setOpcionJugador(Opcion);

      // Genera aleatoriamente la opción del oponente (PC)
      const opcionAleatoriaPC = opciones[Math.floor(Math.random() * opciones.length)];
      setOpcionPC(opcionAleatoriaPC);

      // Determina el ganador de la ronda
      determinarGanador(Opcion, opcionAleatoriaPC);
    }
  };

  const determinarGanador = (opcionJugador, opcionPC) => {
    if (opcionJugador === opcionPC) {
      setResultado("Empate");
    } 
    
    else if (
      (opcionJugador === "piedra" && opcionPC === "tijera") ||
      (opcionJugador === "papel" && opcionPC === "piedra") ||
      (opcionJugador === "tijera" && opcionPC === "papel")
    ) {
      // Jugador gana
      setResultado("Ganaste");
      setPuntosJugador(puntosJugador + 1);
    } 
    
    else {
      // PC gana
      setResultado("Perdiste");
      setPuntosPC(puntosPC + 1);
    }

    // Actualiza los intentos
    setIntentos(intentos + 1 <= 3);

    // Verifica si el juego ha terminado
    if (puntosJugador === 3 || puntosPC === 3 ) {
      setJuegoTerminado(true);
    }
  };

  const reiniciarJuego = () => {
    setNombre("");
    setOpcionJugador(null);
    setOpcionPC(null);
    setPuntosJugador(0);
    setPuntosPC(0);
    setResultado("");
    setJuegoTerminado(false);
  };

  useEffect(() => {
    if (puntosJugador === 3) {
      setResultado(`¡Felicidades, ${nombre}! Ganaste el juego.`);
    } else if (puntosPC === 3) {
      setResultado("La PC ha ganado el juego.");
    } 
  }, [puntosJugador, puntosPC, nombre]);

   return (
    <div className="App">
      <h1>Juego de Piedra, Papel o Tijera</h1>
      <form>
        <label>
          Ingresa tu nombre:
          <input type="text" value={nombre} onChange={handleChange} />
        </label>
        <br />
      </form>
      {!juegoTerminado ? (
        <>
          <h2>{nombre && `Hola, ${nombre}! Elige una opción:`}</h2>
          <div className="opciones">
            {opciones.map((opcion) => (
              <OpcionJugador key={opcion} opcion={opcion} onClick={handleSeleccion} />
            ))}
          </div>
          {opcionJugador && (
            <div>
              <h3>Tu elección: {opcionJugador}</h3>
              <h3>Opción de la PC: {opcionPC}</h3>
              <h2>Marcador:</h2>
              <p>{nombre}: {puntosJugador} puntos</p>
              <p>PC: {puntosPC} puntos</p>
              <Resultado>{resultado}</Resultado> {/* Aplica el estilo al mensaje de resultado */}
            </div>
          )}
        </>
      ) : (
        <div>
          <h2>Fin del juego</h2>
          <Resultado>{resultado}</Resultado> {/* Aplica el estilo al mensaje de resultado */}
          <BotonReiniciar onClick={reiniciarJuego}>Reiniciar</BotonReiniciar> {/* Aplica el estilo al botón de reinicio */}
        </div>
      )}
    </div>
  );
}

export default App;