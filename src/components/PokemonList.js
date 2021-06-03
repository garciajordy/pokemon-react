import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Pokemon from './Pokemon';
import Pagination from './Pagination';
import { singlePokemon, addPokemons } from '../actions';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
const PokemonList = ({ singlePokemon, addPokemons }) => {
  const [pokemon, setPokemon] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(apiUrl);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState();

  useEffect(() => {
    setLoading(true);
    axios.get(currentPageUrl)
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPreviousPageUrl(res.data.previous);
        setPokemon(res.data.results.map((p) => p));
        addPokemons(pokemon);
      });
  }, [currentPageUrl]);
  useEffect(() => {
    axios.get(`${apiUrl}?limit=1118`)
      .then((res) => {
        setAllPokemons(res.data.results.map((p) => p));
        addPokemons(allPokemons);
      });
  }, []);

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function goToPrevPage() {
    setCurrentPageUrl(previousPageUrl);
  }
  function filteredPokemons() {
    if (searchData) {
      return allPokemons.filter((item) => item.name.includes(searchData));
    }
    return pokemon;
  }

  function handleClick() {
    axios.get(`${apiUrl}${searchData}`)
      .then((res) => {
        singlePokemon(res.data);
      });
  }

  if (loading) return 'Loading...';
  return (
    <div>
      <div className="search-box">
        <input onChange={(e) => setSearchData(e.target.value)} tpye="text" placeholder="Search..." />
        {searchData && allPokemons.some((poke) => (poke.name.toUpperCase() === searchData.toUpperCase())) ? <Link onClick={handleClick} to="show">Search</Link> : ' Write the exact name'}

      </div>
      <div className="pokeContainer">
        {filteredPokemons().map((poke) => (
          <Pokemon key={poke.name} name={poke.name} url={poke.url} />
        ))}
      </div>
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={previousPageUrl ? goToPrevPage : null}
      />
    </div>
  );
};

PokemonList.propTypes = {
  addPokemons: PropTypes.func.isRequired,
  singlePokemon: PropTypes.func.isRequired,
};

export default connect(null, { singlePokemon, addPokemons })(PokemonList);
