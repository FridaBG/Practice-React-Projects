import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div>
      <div className="p-20">
        <h1 className='font-bold font-mono text-2xl text-center'>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
                  <Testimonio
          nombre='Frida Bailleres'
          puesto='Ingeniera de Software'
          lugar='Spotify'
          testimonio='"Da miedo cambiar de carrera.Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."'
          imagen='Chona'/>
                    <Testimonio
          nombre='Daniel Hurtado'
          puesto='Ingeniero de Software'
          lugar='Google'
          testimonio='"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."'
          imagen='Juan'/>
                    <Testimonio
          nombre='Carla Velasco'
          puesto='Ingeniera de Software'
          lugar='Meta'
          testimonio='"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."'
          imagen='Juana'/>
      </div>
    </div>
  );
}

export default App;

