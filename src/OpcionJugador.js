import React from 'react';
// Se importan las imagenes del juego para cada uno de los botones
import { BotonOpcion } from './Estilos'; // Importa el estilo
import piedraImage from './images/piedra.png'; 
import papelImage from './images/papel.png'; 
import tijeraImage from './images/tijera.png'; 

const OpcionJugador = ({ opcion, onClick }) => {
  // Mapa de opciones a imágenes 
  const imagenes = {
    piedra: piedraImage,
    papel: papelImage,
    tijera: tijeraImage,
  };

  // Estilo para las imágenes
  const estiloImagen = {
    width: '50px', 
    height: '50px', 
  };

  return (
    <BotonOpcion onClick={() => onClick(opcion)}>
      {}
      <img src={imagenes[opcion]} alt={opcion} style={estiloImagen} />
    </BotonOpcion>
  );
}

export default OpcionJugador;



