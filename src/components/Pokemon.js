import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function Pokemon({ name, url }) {
  const [pic, setPic] = useState();
  useEffect(() => {
    axios.get(url)
      .then((res) => setPic(res.data.sprites.front_default));
  }, [url]);

  return (
    <div className="pokemon">
      <h3>{name}</h3>
      <img src={pic} alt={name} />
    </div>
  );
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default Pokemon;
