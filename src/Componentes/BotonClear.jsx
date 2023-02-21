import React from 'react';
import '../Hoja_de_estilos/BotonClear.css';

function BotonClear(props) {
  return (
    <div className='boton-clear' onClick={props.manejarClear}>
      {props.children}
    </div>
  );
}

export default BotonClear;