import { useState } from "react";

import "./App.css"; 
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoList from "./components/TodoList/TodoList";

export const blockName = "App-wrapper";


const AppV2 = () => {
  const [list, setList] = useState([]);

  const handleClickAdd = (todo) => {
    setList([ todo, ...list]);
  }

  const handleDelete = (todo) => {
    const filteredList = list.filter(t => t.id !== todo.id);
    setList(filteredList);
  }


  return (
    <div className={blockName}>
      <TodoHeader onAdd={handleClickAdd} />
      <TodoList  list={list} onDelete={handleDelete} />
    </div>

  );

}

export default AppV2;