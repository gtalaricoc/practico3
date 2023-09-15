import React from 'react';
import { BotonOpcion } from './Estilos'; // Importa el estilo

const OpcionPC = ({ opcion }) => {
  return (
    <BotonOpcion disabled> {}
      {opcion}
    </BotonOpcion>
  );
}

export default OpcionPC;
