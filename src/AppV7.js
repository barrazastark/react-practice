
const DB = [
  {
    id: Math.random(),
    name: "Nombre",
    color: "yellow", // amarillo ? yellow
    bgColor: "black",
  },
  {
    id: Math.random(),
    name: "Nombre",
    type: "fire",
    bgColor: "white",
  },
];

// Styles in js
/*
  attribute -> style

  css modules

  styled-components

*/

/*
  background-color: red;
  display: flex;
  margin: 10px;
  padding: 10em;

  vs

  display: "flex",
  backgroundColor: "red";
  margin: "10px", ó 10,
  padding: "10em",
*/

const AppV7 = () => {

  const display = () => {

    const defaultStyles = {
      border: "1px solid red",
      color: "green",
    }

    return DB.map(el => {

      const { id, bgColor, color, name } = el;

      const styleSheet = {
        ...defaultStyles,
        backgroundColor: bgColor, 
        color: color ? color : defaultStyles.color,
      }

      return (
        <div key={id} style={styleSheet}>
          {name}
        </div>
      )

    })

  }

  return (
    <div>
      {display()}
    </div>
  )
}

export default AppV7;


class MyComponent {
  
}