import { useEffect, useState } from "react";

// Hooks: son funciones de react que interfieren con el estado y el ciclo de vida de los componentes

// localStorage.setItem("user", "barraza");

const AppV9 = () => {
  const [name, setName] = useState("");
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  // componentDidMount
   useEffect(() => {
    
    // hidratar la UI del local storage
    console.log("Hidratando...");
    setName(localStorage.getItem("user") || "");
    setAuth(localStorage.getItem("user") ? true : false);
    setLoading(false);


  }, []);

  useEffect(() => {

    const myInterval = setInterval(() => {

      console.log("interval")

    }, 3000);

    // sentry.init("config")

    // Sentry


    // funcion guardada
    // el thread no pasa aqui hasta que si se desmonte
    // return "string"
    return () => {
      // ESTO SE VA EJECUTAR CUANDO EL COMPONENTE SE DESMONTE
      // aqui ya está desmontado el componente
      console.log("HERE CLEANUP")
      // sentry.end();
      clearInterval(myInterval);

    }


  }, [])


  if(loading) {
    return <p>loading</p>
  }

  
  if (!auth) {
    return (
      <div>
        <p>Login page</p>
        <button onClick={() => { 
          setAuth(true); 
          setName("Jose");
          localStorage.setItem("user", "Jose");
          }
        }
        >login</button>
      </div>
    );
  }


  return (
    <div>
      <p>{name}</p>
      
      <br />
      <input
        type="text"
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );


  

}

export default AppV9;
