import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Show({
  pokemonName, pokeImg, style, weight, height,
}) {
  return (
    <div className="show">
      <a href="/">Back</a>
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
  pokemonName: PropTypes.string,
  pokeImg: PropTypes.string,
  weight: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.string,
};
Show.defaultProps = {
  pokemonName: 'test',
  pokeImg: 'test',
  weight: 'test',
  height: 'test',
  style: 'test',
};
const mapStateToProps = (state) => ({
  pokemonName: state.searchReducer.name,
  pokeImg: state.searchReducer.img,
  weight: state.searchReducer.weight,
  height: state.searchReducer.height,
  style: state.searchReducer.style,
});

export default connect(mapStateToProps)(Show);
