import React from 'react';

function Boton(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };

    return (
        <div
            className={`flex justify-center items-center border-4 border-solid border-white h-16 w-16 p-5 m-2 shadow-lg rounded-lg bg-green-200 font-mono text-lg ${esOperador(props.children) ? 'operador' : ''}`}>
            {props.children}
        </div>
    );
}

export default Boton;
