import '../styles/cards.css';

const PokemonCard = ({ pokemon, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;