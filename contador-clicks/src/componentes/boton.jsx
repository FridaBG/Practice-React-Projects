import React from 'react';
import { Button, ChakraProvider } from '@chakra-ui/react'

function Boton({ texto, esBotonDeClicks, manejarClick }) {
  // Calcula el colorScheme basado en esBotonDeClicks
  const colorScheme = esBotonDeClicks ? 'blue' : 'green';

  return (
    <Button
      colorScheme={colorScheme} // Aplica el colorScheme calculado
      onClick={manejarClick} // Cuando se hace clic en el botón, se activa el prop manejarClick
    >
      {texto}
    </Button>
  );
}

export default Boton;
