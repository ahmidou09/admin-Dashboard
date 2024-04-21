import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dataArray } from "../../pages/Users/FakeDataList";
import Pagination from "../../ui/Pagination";
import styled from "styled-components";

const UsersBoxContainer = styled.div`
  .user_container {
    padding: 2rem 1rem;

    .user {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--color-lines);
      margin-bottom: 1.6rem;

      .user_image {
        width: 6rem;

        img {
          border: 2px solid var(--color-teal-1);
          width: 5rem;
          height: 5rem;
          border-radius: 50%;
          object-fit: cover;
        }
      }

      .user_info {
        p {
          font-size: 1.4rem;
          color: var(--color-white-2);
          font-weight: 200;
        }
      }
    }
  }
`;
function UsersBox() {
  const usersPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);

  const usersToShow = dataArray.slice(
    currentPage * usersPerPage,
    (currentPage + 1) * usersPerPage
  );
  return (
    <UsersBoxContainer>
      <h1>Users</h1>
      <div className="user_container">
        {usersToShow.map((user) => (
          <Link to={`/users/${user.id}`} key={user.id}>
            <div className="user">
              <div className="user_image">
                <img src={user.image} alt={user.fullName} />
              </div>
              <div className="user_info">
                {" "}
                <p>{user.fullName}</p>
                <p>{user.email}</p>
              </div>
              <div className="user_price">
                <p>{user.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        totalItems={dataArray.length}
        itemsPerPage={usersPerPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </UsersBoxContainer>
  );
}

export default UsersBox;
