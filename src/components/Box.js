
const Box = (props) => {

  console.log("render in Box");

  return (
    <div>
      {props.value}
    </div>
  );

}

export default Box;