import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userData } from "../../pages/Users/userData";
import Pagination from "../../ui/Pagination";
import styled from "styled-components";

const UsersBoxContainer = styled.div`
  .user_container {
    padding: 2rem 1rem;
    min-width: 40rem;

    @media screen and (max-width: 1020px) {
      min-width: min-content;
    }

    @media screen and (max-width: 720px) {
      padding: 2rem 0.5rem;
      min-width: min-content;
    }

    .user {
      display: flex;
      align-items: center;
      gap: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--color-lines);
      margin-bottom: 1rem;

      @media screen and (max-width: 720px) {
        gap: 0.5rem;
      }

      .user_image {
        width: 6rem;

        @media screen and (max-width: 720px) {
          width: 4rem;
        }

        img {
          border: 2px solid var(--color-teal-1);
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          object-fit: cover;

          @media screen and (max-width: 720px) {
            width: 3.5rem;
            height: 3.5rem;
          }
        }
      }

      .user_info {
        margin-right: auto;
        p {
          font-size: 1.4rem;
          color: var(--color-white-2);
          font-weight: 200;

          @media screen and (max-width: 720px) {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;
function UsersBox() {
  const usersPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);

  const usersToShow = userData.slice(
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
        totalItems={userData.length}
        itemsPerPage={usersPerPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </UsersBoxContainer>
  );
}

export default UsersBox;
