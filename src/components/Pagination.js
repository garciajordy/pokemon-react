import React from 'react';
import PropTypes from 'prop-types';

function Pagination({ goToPrevPage, goToNextPage }) {
  return (
    <div className="button-bottom">
      {goToPrevPage && <button type="button" onClick={goToPrevPage}>Previous</button>}
      {goToNextPage && <button type="button" onClick={goToNextPage}>Next</button>}
    </div>
  );
}
Pagination.propTypes = {
  goToPrevPage: PropTypes.func.isRequired,
  goToNextPage: PropTypes.func.isRequired,

};
export default Pagination;
