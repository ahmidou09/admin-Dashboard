import React from "react";
import styled from "styled-components";
import { userData } from "./userData";
import TableItems from "../../components/Table/Table";
import BodyUser from "./BodyUser";
import { userColumns } from "./BodyUser";

const UsersContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 16rem);
  padding: 2rem 4rem;
  position: relative;

  overflow-x: scroll;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 2.4rem;
    }

    button {
      background-color: var(--color-teal-1);
      color: var(--color-white);
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      cursor: pointer;

      &:hover {
        background-color: var(--color-teal-2);
        transition: all 0.2s ease-in-out;
        transform: scale(1.05);
      }
    }
  }
`;

function Users() {
  return (
    <UsersContainer>
      <div className="title">
        <h1>Users</h1>
        <button>Add User</button>
      </div>
      <TableItems
        data={userData}
        columns={userColumns}
        renderItem={(user) => <BodyUser user={user} />}
        itemPerPage="8"
      />
    </UsersContainer>
  );
}

export default Users;
