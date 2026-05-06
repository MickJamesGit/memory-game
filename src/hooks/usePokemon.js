
import { useEffect, useState } from "react";

export const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const ids = new Set();

        while (ids.size < 15) {
            ids.add(Math.floor(Math.random() * 1000) + 1);
        }

        const uniqueIds = Array.from(ids);

        const promises = uniqueIds.map((id) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json())
        );

        const results = await Promise.all(promises);
        setPokemonList(results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  return { pokemonList, loading };
};