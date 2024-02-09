import React from 'react';

function Testimonio(props) {
 return (
    <div className='flex border-1 border-black rounded-lg overflow-hidden m-10 shadow-lg'>
      <img className='h-48 w-48 object-cover'
           src={require('../imágenes/Testimonio_' + props.imagen + '.png')}
           alt=''/>
      <div className='px-6 py-4'>
        <p className='font-semibold text-lg text-center'><strong>{props.nombre}</strong></p>
        <p className='text-gray-600 text-center'>{props.puesto} en <strong>{props.lugar}</strong></p>
        <p className='mt-4 text-gray-700 text-left'>{props.testimonio}</p>
      </div>
    </div>
 );
} 

export default Testimonio;

