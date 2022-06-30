import  "./TodoList.css";

const blockName = "TodoList-wrapper";

const TodoList = (props) => {
  const { list, onDelete } = props;


  return (
    <div className={blockName}>
      {
        list.map(todo => {
          return (
            <div key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={() => onDelete(todo)}>X</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default TodoList;