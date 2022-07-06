
import { useState } from "react";

// controlled components: el valor está siendo controlado por el state
// uncontrolled components: el valor de un componente no está siendo controlado por el state

const APPV5 = () => {

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [power, setPower] = useState(0);
  const [list, setList] = useState([]);


  const handleAdd = () => {
    const pokemon = {
      // name: name,
      id: Math.random(),
      name,
      type,
      power,
    }
    // agrega a la bd
    setList([pokemon, ...list]);
    setName("");
    setType("");
    setPower(0);
  }

  const handleChange = (event) => {
    const { value, id } = event.target;

    if(id === 'name') {
      setName(value);
    }
    else if (id === 'type') {
      setType(value);
    }
    else {
      setPower(value);
    }
    
  }

  const displayPokemonList = () => {

    const createdList = list.map((pokemon) => {

      return (
        <div key={pokemon.id}>
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
          <p>{pokemon.power}</p>
        </div>
      );

    });

    return createdList;

  }

  return (
    <div>
      <h2>Add new pokemon</h2>
      <div>
        <input
          id="name"
          value={name} 
          type="text" 
          placeholder="Name"
          onChange={handleChange}
          data-algo="Info"
        />
        <input
          id="type"
          value={type}
          onChange={handleChange}
          type="text"
          placeholder="please add a type"
        />
        <input
          id="power"
          value={power}
          type="number"
          placeholder="power"
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div>
        {displayPokemonList()}
      </div>

    </div>
  );

}

export default APPV5;