import React from 'react';
import { BotonOpcion } from './Estilos'; // Importa el estilo

const Opcion = ({ opcion, onClick }) => {
  return (
    <BotonOpcion onClick={() => onClick(opcion)}> {}
      {opcion}
    </BotonOpcion>
  );
}

export default Opcion;
