
import styles from "./PokemonCard.css";

const PokemonCard = (props) => {
  
  const { name, img, type, onClick } = props;

  const handleClick = () => {
    onClick(name);
  }

  // JSX
  return (
    <div 
      className={`pokemon-card ${type}`} 
      
      onClick={handleClick}
      role="button"
    >
      <img src={img} />
      <p>{name}</p>
    </div>
  );

}

export default PokemonCard;
