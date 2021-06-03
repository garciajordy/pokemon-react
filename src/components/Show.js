import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Show({
  pokemonName, pokeImg, style, weight, height,
}) {
  return (
    <div className="show">
      <Link to="/">Back</Link>
      <div className="poke">
        <h2>{pokemonName}</h2>
        <img src={pokeImg} alt={pokemonName} />
        <h1>
          {pokemonName}
        </h1>
        <p>
          <span>{'Type: '}</span>
          {style}
        </p>
        <p>
          <span>
            {'Height: '}
          </span>
          {height / 10}
          {' M'}
        </p>
        <p>
          <span>
            {'Weight: '}
          </span>
          {weight / 10}
          {' KG'}
        </p>
      </div>

    </div>
  );
}

Show.propTypes = {
  pokemonName: PropTypes.string.isRequired,
  pokeImg: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  pokemonName: state.searchReducer.name,
  pokeImg: state.searchReducer.img,
  weight: state.searchReducer.weight,
  height: state.searchReducer.height,
  style: state.searchReducer.style,
});

export default connect(mapStateToProps)(Show);
