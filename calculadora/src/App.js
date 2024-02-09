import logo from './logo.svg';
import './App.css';
import { ChakraProvider, HStack, VStack } from '@chakra-ui/react';
import Logo from './imagenes/logo-fcc.png';
import Boton from './componentes/boton.jsx';

function App() {
  return (
    <ChakraProvider>
      <div className='flex m-10 h-50 place-content-center'>
        <img src={Logo} alt="Logo"/>
      </div>
      <div className="flex justify-center items-center">
        <div className='border-4 border-solid border-white h-128 w-96 p-20 m-5 shadow-lg rounded-lg bg-blue-200'>
          {/* Contenido de la calculadora aquí */}
          <VStack>
            <HStack>
              <Boton>1</Boton>
              <Boton>2</Boton>
              <Boton>3</Boton>
              <Boton>+</Boton>
            </HStack>
            <HStack>
              <Boton>4</Boton>
              <Boton>5</Boton>
              <Boton>6</Boton>
              <Boton>-</Boton>
            </HStack>
            <HStack>
              <Boton>7</Boton>
              <Boton>8</Boton>
              <Boton>9</Boton>
              <Boton>*</Boton>
            </HStack>
            <HStack>
              <Boton>=</Boton>
              <Boton>0</Boton>
              <Boton>.</Boton>
              <Boton>/</Boton>
            </HStack>
          </VStack>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
