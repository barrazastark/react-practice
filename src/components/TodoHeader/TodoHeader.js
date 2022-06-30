import { useState, useRef } from "react";

import "./TodoHeader.css";

const blockName = "TodoHeader-wrapper";

/*
Controlled component: controlado con una pieza de estado
Uncontrolle component: controlado con el comportamiento defualt del browser

*/

const TodoHeader = (props) => {
  const { onAdd } = props;
  const [todo, setTodo] = useState("");
  const counter = useRef(0);

  const handleChange = (event) => {
    setTodo(event.target.value);
  }

  const handleClick = () => {
    onAdd({ text: todo, id: counter.current });
    counter.current++;
  }

  return (
    <div className={blockName}>
      <input 
        type="text"
        placeholder="Agregar tareas"
        value={todo}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Agregar</button>
    </div>
  );

}

export default TodoHeader;