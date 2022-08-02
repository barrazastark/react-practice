import { useEffect, useState } from "react";

// Hooks: son funciones de react que interfieren con el estado y el ciclo de vida de los componentes

localStorage.setItem("user", "barraza")

const AppV8 = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true);
  // ejecutar una funcions despues de que se haya montado


  // componentDidMount
   useEffect(() => {
    /*
      casos de uso del useEffect: (un efecto es un side effect de js/react )

      - Browser API's: 
        - localstorage
        - sessionStorage
        - http request
        - window o document

    */

    const getUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    }

    getUsers();

  }, []);
  

  // componentDidUpdate
  useEffect(() => {

    
  }, [loading]);

  // siempre se ejucuta si hay algun cambio en state o props
  useEffect(() => {

  })

  return (
    <div>
      {loading && <p>Loading...</p>}
      {users.map(u => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );


  

}

export default AppV8;
