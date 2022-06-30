


// Quiz

import { useState } from "react";

// 1 
// |  hoy es jueves ?,  [True] [False] |


// 2
// |  otra ? , [True] [False] |

// Acertaste 5/8

const QuestionsDB = [ // ARRAY
 {
  question: "javascript es un lenguaje de backend ?",
  answer: true,
 },
 {
  question: "CSS es un lenguaje de programacion ?",
  answer: false,
 },
];

const AppV4 = () => {

  const [turno, setTurno]  = useState(0); // un array con 2 elelemntos, (valor, funcion)
  const [score, setScore] = useState(0);
  
  // render

  // callback
  const handleClick = (answer) => {
    
    if (QuestionsDB[turno].answer === answer) {
      setScore(score + 1);
    }

    setTurno(turno + 1);
    // un cambio de estado lanza un nuevo render, pero
    // ejecutar 2 dispatchers no ejecuta 2 renders
    // gracias al batching update de react v18
  }

  const handleCheckDetails = (book) => {
    console.log(`Detalles de la pregunta fue sacada del book: ${book}`)
  }

  if(turno === QuestionsDB.length) {
    return <div>{`Acertaste ${score} de ${QuestionsDB.length}`}</div>
  }
 
  return (
    <div>
      <Question 
        onCheckDetails={handleCheckDetails}
        question={QuestionsDB[turno].question} 
      /> 

     {/* <button onClick={() => handleClick()}>True</button> */}
      <button onClick={() => handleClick(true)}>True</button>
      <button onClick={() => handleClick(false)}>False</button>
    </div>
  )

}

export default AppV4;

// Question.js

const Question = ({ question, onCheckDetails }) => {

  /* 
    const handleCheckDetails = () => {
    console.log(`Detalles de la pregunta fue sacada del book: Kamasutra`)
  }
  */


  return (
    <div onClick={() => onCheckDetails("Kamasutra")}>
      <p>{question}</p>
    </div>
  )

}