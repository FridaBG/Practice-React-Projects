import React from 'react';

function Contador ({ numClicks }){
    return(
        <div className='border-8 p-20 outline-white	rounded-lg text-white text-8xl'>
            { numClicks }
        </div>
    );
}

export default Contador
