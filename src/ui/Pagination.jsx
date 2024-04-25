import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  bottom: 2rem;
  width: 100%;
  padding: 2rem 4rem;

  .page-info {
    font-size: 1.4rem;
    color: var(--color-white-2);
    width: 5rem;
    flex: 1;
    text-align: center;
  }

  button {
    background-color: transparent;
    border: none;
    color: var(--color-white-2);
    font-size: 2rem;
  }
`;

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const goToNextPage = () => {
    const nextPage = (currentPage + 1) % pageCount;
    setCurrentPage(nextPage);
    onPageChange(nextPage);
  };

  const goToPreviousPage = () => {
    const prevPage = (currentPage - 1 + pageCount) % pageCount;
    setCurrentPage(prevPage);
    onPageChange(prevPage);
  };

  return (
    <PaginationContainer>
      <button onClick={goToPreviousPage} disabled={currentPage === 0}>
        <GrPrevious />
      </button>
      <span className="page-info">{`Page ${
        currentPage + 1
      } of ${pageCount}`}</span>
      <button onClick={goToNextPage} disabled={currentPage === pageCount - 1}>
        <GrNext />
      </button>
    </PaginationContainer>
  );
};

export default Pagination;
