import { useState } from "react"

import "./App.css";

import Button from "./components/Button";
import Box from "./components/Box";
import Box2 from "./components/Box2";


// Hook de react,
// los hooks son funciones especiales que interactuan con el estado de la applicaion o con los methodos del ciclo de vida de los componentes
// los hooks empeizan con la palabra use

const App = () => {

  const [counter, setCounter] = useState(0); // esto es una pieza de estado, es un number
  
 // render
  console.log("render");

  const handleAdd = () => {
    //counter = 2; // esto no ejecuta el render, nunca hacer esto!!
    setCounter(counter + 1); // esta funcion es asyncrona
  }

  const handleRest = () => {
    setCounter(counter - 1);
  }

  // 1 - el usuario ejecuta una accion
  // 2 - se ejecuta el onClick del boton
  // 3 - se dispara el hook para aumentar el counter
  // 4 - se ejecuta el render nuevamente
  // 5 - se actualiza la UI

  // React es: one-way data binding  -> -> -> -> ->
  
  
  {/* Conditional rendering: Condicionar un elemento para ver si se renderiza o no */}

  /* if(counter === 0) {
    return (
      <div>
        <p>Start</p>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleRest}>-</button>
      </div>
    )
  } */

  const Counter = <p>{counter}</p>;

  return (
    <div>
      {
        // counter === 0 ? <p>Start</p> : <p>{counter}</p>
      }
      { counter !== 0 && Counter }
      <button onClick={handleAdd}>+</button>
      <button onClick={handleRest}>-</button>
      <Box value={counter} />
      <Box value={counter} />
      <Box value={counter} />
      <Box2 /> {/* React usa el VirtualDOM: La representacion de los componentes de React en un objeto */}
    </div>
  );


  

}

export default App;
