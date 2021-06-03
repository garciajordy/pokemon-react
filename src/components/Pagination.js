import React from 'react';
import PropTypes from 'prop-types';

function Pagination({ goToPrevPage, goToNextPage }) {
  return (
    <div className="button-bottom">
      {goToPrevPage ? <button type="button" onClick={goToPrevPage}>Previous</button> : 'First Page'}
      {goToNextPage ? <button type="button" onClick={goToNextPage}>Next</button> : 'Last Page'}
    </div>
  );
}

Pagination.propTypes = {
  goToPrevPage: PropTypes.func,
  goToNextPage: PropTypes.func,
};

Pagination.defaultProps = {
  goToNextPage: null,
  goToPrevPage: null,
};

export default Pagination;
