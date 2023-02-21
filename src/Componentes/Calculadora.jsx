import React from 'react';
import '../Hoja_de_estilos/Calculadora.css';
import Boton from './Boton';
import BotonClear from './BotonClear';
import Pantalla from './Pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function Calculadora() {
  const [input, setInput] = useState('');

  const agregarInput = val => {
    if (val === 'sin' || val === 'cos' || val === 'tan' || val === 'log' || val === '√')
      val += '(';
    setInput(input + val);
  }

  const borrar = () => {
    if (input.length > 0)
      setInput(input.substring(0, input.length - 1));
  }

  const calcularResultado = () => {
    if (input)
      setInput(evaluate(input.replace('π', 'pi').replace('√','sqrt')));
  }

  return (
    <div className='contenedor-calculadora'>
      <Pantalla input={input}/>
      <div className="fila">
        <Boton manejarClic={agregarInput}>sin</Boton>
        <Boton manejarClic={agregarInput}>%</Boton>
        <Boton manejarClic={agregarInput}>(</Boton>
        <Boton manejarClic={agregarInput}>)</Boton>
        <BotonClear manejarClear={borrar}>DEL</BotonClear>
        <BotonClear manejarClear={() => setInput('')}>AC</BotonClear>
      </div>
      <div className="fila">
        <Boton manejarClic={agregarInput}>cos</Boton>
        <Boton manejarClic={agregarInput}>!</Boton>
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>/</Boton>
      </div>
      <div className="fila">
        <Boton manejarClic={agregarInput}>tan</Boton>
        <Boton manejarClic={agregarInput}>log</Boton>
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>
      </div>
      <div className="fila">
        <Boton manejarClic={agregarInput}>π</Boton>
        <Boton manejarClic={agregarInput}>√</Boton>
        <Boton manejarClic={agregarInput}>1</Boton>
        <Boton manejarClic={agregarInput}>2</Boton>
        <Boton manejarClic={agregarInput}>3</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
      </div>
      <div className="fila">
        <Boton manejarClic={agregarInput}>e</Boton>
        <Boton manejarClic={agregarInput}>^</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={calcularResultado}>=</Boton>
        <Boton manejarClic={agregarInput}>+</Boton>
      </div>
    </div>
  );
}

export default Calculadora;