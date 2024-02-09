// Importaciones necesarias
import { ChakraProvider, Box, Image, VStack, HStack } from '@chakra-ui/react';
import LogoFCC from './imagenes/logo-fcc.png';
import Boton from './componentes/boton.jsx';
import Contador from './componentes/contador.jsx'
import { useState } from 'react';
import './App.css';

// Componente App
function App() {

  //Hook de useState
  const [numClicks, setNumClicks] = useState(0); //0 es el estado inicial de mi valor numClicks que va a ser actualizado por mi funcion setNumClicks
  
  // Manejadores de eventos
  const sumarClick = () => {
    setNumClicks(numClicks + 1)
  };

  const manejarReinicio = () => {
    setNumClicks(numClicks == 0)
  };

  const restarClick = () => {
    setNumClicks(numClicks - 1)
  };

  // Renderización del componente
  return (
    <ChakraProvider>
      <VStack spacing={4} align="center" justify="center" className="pt-8">
        <Image src={LogoFCC} alt="Logo" mx="auto" />
        <Contador numClicks={numClicks} />
        <HStack>
          <Boton texto='Click' esBotonDeClicks={true} manejarClick={sumarClick} />
          <Boton text='Click' esBotonDeClicks={true} manejarClick={restarClick} />
          <Boton texto='Reiniciar' esBotonDeClicks={false} manejarClick={manejarReinicio} />
        </HStack>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
