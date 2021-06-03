import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';
import Pagination from './Pagination';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(apiUrl);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(currentPageUrl)
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPreviousPageUrl(res.data.previous);
        setPokemon(res.data.results.map((p) => p));
      });
  }, [currentPageUrl]);

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function goToPrevPage() {
    setCurrentPageUrl(previousPageUrl);
  }

  if (loading) return 'Loading...';
  return (
    <div>
      <div className="pokeContainer">
        {pokemon.map((poke) => (
          <Pokemon key={poke.name} name={poke.name} url={poke.url} />
        ))}
      </div>
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={previousPageUrl ? goToPrevPage : null}
      />
    </div>
  );
}

export default PokemonList;
