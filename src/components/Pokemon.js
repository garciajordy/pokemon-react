import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Pokemon({ name, url, handleClick }) {
  const [pic, setPic] = useState();
  useEffect(() => {
    axios.get(url)
      .then((res) => setPic(res.data.sprites.front_default)).catch((error) => error);
  }, [url]);

  return (
    <div className="pokemon">
      <Link to="show" onClick={() => handleClick(name)}>{name}</Link>
      <img src={pic} alt={name} />
    </div>
  );
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};
Pokemon.defaultProps = {
  url: null,
};
export default Pokemon;
