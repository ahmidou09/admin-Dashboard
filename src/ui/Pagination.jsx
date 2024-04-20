import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

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
    <div className="pagination">
      <button onClick={goToPreviousPage} disabled={currentPage === 0}>
        <GrPrevious />
      </button>
      <button onClick={goToNextPage} disabled={currentPage === pageCount - 1}>
        <GrNext />
      </button>
    </div>
  );
};

export default Pagination;
