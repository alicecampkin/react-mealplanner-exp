import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Pagination = ({ page, totalPages, paginate }) => {
  const nextPage = Math.min(page + 1, totalPages);
  const prevPage = Math.max(page - 1, 1);

  return (
    <PaginationBar>
      { (page > 1) && <button type="button" onClick={() => paginate(prevPage)}>Prev</button>}
      <p>Page {page} of {totalPages}</p>
      { (page < totalPages) && <button type="button" onClick={() => paginate(nextPage)}>Next</button>}
    </PaginationBar>
  );
};

export default Pagination;

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

const PaginationBar = styled.div`
    width:100%;
    max-width:500px;
    height:50px;
    display: flex;
    margin:0 auto;
    align-items:center;
    justify-content:space-between;
`;
