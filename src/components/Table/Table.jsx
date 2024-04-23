import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const TableStyled = styled.table`
  width: 100%;
  min-height: min-content;
  border-collapse: collapse;
  margin: 2.5rem 0;
  font-size: 1.4rem;
  min-width: 40rem;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.15);
`;

const Thead = styled.thead`
  background-color: var(--color-grey-1);
  color: var(--color-white);
  text-align: left;
`;

const Th = styled.th`
  padding: 1.2rem 1.5rem;
`;

const Tbody = styled.tbody`
  tr {
    border-bottom: 1px solid var(--color-gray-1);
    text-align: left;
  }

  tr:nth-of-type(even) {
    background-color: var(--color-primary-3);
  }

  tr:last-of-type {
    border-bottom: 2px solid var(--color-red-1);
  }
`;

const PaginationWrapper = styled.div`
  padding: 2rem;
  display: flex;
  gap: 0rem;
  position: fixed;
  bottom: 10rem;
  right: 5rem;
`;

const PaginationButton = styled.button`
  padding: 0.5rem 1.5rem;
  border: none;
  background-color: transparent;
  color: ${(props) =>
    props.$isActive ? "var(--color-white)" : "var(--color-teal-1)"};
  cursor: pointer;

  &:hover {
    color: var(--color-white);
  }
`;

const PaginationNextPrevious = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: transparent;
  border: none;
`;

const TableItems = ({ data, columns, renderItem, itemPerPage = 8 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <TableStyled>
        <Thead>
          <tr>
            {columns.map((column) => (
              <Th key={column.key}>{column.title}</Th>
            ))}
          </tr>
        </Thead>
        <Tbody>{currentItems.map((item) => renderItem(item))}</Tbody>
      </TableStyled>
      <PaginationWrapper>
        <PaginationNextPrevious
          onClick={() => currentPage > 1 && paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <GrPrevious />
        </PaginationNextPrevious>
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          if (totalPages > 5) {
            if (page <= 2 || page > totalPages - 2) {
              return (
                <PaginationButton
                  key={page}
                  $isActive={page === currentPage}
                  onClick={() => paginate(page)}
                >
                  {page}
                </PaginationButton>
              );
            }
            if (page === 3) {
              return <span key="ellipsis">...</span>;
            }
          } else {
            return (
              <PaginationButton
                key={page}
                $isActive={page === currentPage}
                onClick={() => paginate(page)}
              >
                {page}
              </PaginationButton>
            );
          }
          return null;
        })}
        <PaginationNextPrevious
          onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <GrNext />
        </PaginationNextPrevious>
      </PaginationWrapper>
    </>
  );
};

export default TableItems;
