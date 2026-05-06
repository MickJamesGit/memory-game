import PokemonCard from './PokemonCard';
import '../styles/cards.css';

const PokemonGrid = ({ pokemonList, onPokemonClick }) => {
  return (
    <div className="cards-grid">
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onClick={() => onPokemonClick(pokemon.id)}
        />
      ))}
    </div>
  );
};

export default PokemonGrid;