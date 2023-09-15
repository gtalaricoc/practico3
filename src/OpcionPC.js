import React from 'react';
import { BotonOpcion } from './Estilos'; // Importa el estilo

const OpcionPC = ({ opcion }) => {
  return (
    <BotonOpcion disabled> {/* Aplica el estilo al botón y deshabilítalo */}
      {opcion}
    </BotonOpcion>
  );
}

export default OpcionPC;
