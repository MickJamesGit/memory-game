
import { useState } from 'react'
import './App.css'
import PokemonGrid from './components/PokemonGrid';
import { usePokemon } from './hooks/usePokemon';

function App() {
  const { pokemonList, loading, setPokemonList} = usePokemon();
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [clickedPokemonIds, setClickedPokemonIds] = useState([]);

  const handlePokemonClick = (pokemonId) => {
    if (clickedPokemonIds.includes(pokemonId)) {
      setBestScore((prevBest) => Math.max(prevBest, currentScore));
      setCurrentScore(0);
      setClickedPokemonIds([]);
      return;
    }

    const nextScore = currentScore + 1;
    setCurrentScore(nextScore);
    setBestScore((prevBest) => Math.max(prevBest, nextScore));
    setClickedPokemonIds((prev) => [...prev, pokemonId]);
    setPokemonList((prev) => shuffle(prev));
  };

  const shuffle = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
  };

  if (loading) return <p>Loading pokemon...</p>;

  return (
    <div className="app">
      <header className="scoreboard">
        <p>Current Score: {currentScore}</p>
        <p>Best Score: {bestScore}</p>
      </header>
      <PokemonGrid pokemonList={pokemonList} onPokemonClick={handlePokemonClick} />
    </div>
  );
}

export default App
