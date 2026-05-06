
import './App.css'
import PokemonGrid from './components/PokemonGrid';
import { usePokemon } from "./hooks/usePokemon";

function App() {
const { pokemonList, loading } = usePokemon();

  if (loading) return <p>Loading cards...</p>;

  return <PokemonGrid pokemonList={pokemonList} />;
}

export default App
