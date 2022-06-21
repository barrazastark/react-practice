
/**
 * Componente: respresentacion de una porcion en la UI,
 * son pieza independientes y reusables,
 * un componente tiene props la cual es un objetos con propiedades 
 * que son heredadas y solo de lectura.
 * 
 * Un component siempre debe regresar un elemento JSX
 * 
 * 
 * JSX: Javascript and XML, es la combinacion de HTML con JS.
 */

import React from "react";

// 
const Button = (props) => {
 //  console.log("render on Button");
  
  const { title } = props;
  
  return (
    <button>{title}</button>
  )

}


export default Button;