import PokemonCard from './PokemonCard';
import '../styles/cards.css';

const PokemonGrid = ({ pokemonList }) => {
  return (
    <div className="cards-grid">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonGrid;