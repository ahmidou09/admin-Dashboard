import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

const Td = styled.td`
  padding: 1.2rem 1.5rem;
`;

const ActionButton = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: transparent;
  color: ${(props) =>
    props.$delete ? "var(--color-button-red-1)" : "var(--color-teal-1)"};
  border-radius: 0.5rem;
  cursor: pointer;

  svg {
    font-size: 2.2rem;
  }
`;

const Avatar = styled.div`
  min-width: 4rem;
  min-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: left;

  img {
    width: 4rem;
    height: auto;
    border-radius: 50%;
  }
`;

function BodyUser({ user }) {
  return (
    <tr key={user.id}>
      <Td>{user.id}</Td>
      <Td>
        <Link to={`/users/${user.id}`}>
          <Avatar>
            <img src={user.image} alt="User" />
          </Avatar>
        </Link>
      </Td>
      <Td>{user.fullName}</Td>
      <Td>{user.email}</Td>
      <Td>{user.phone}</Td>
      <Td>{user.createdAt}</Td>
      <Td>{user.status ? "✔" : "✘"}</Td>
      <Td>
        <ActionButton>
          <BiEdit />
        </ActionButton>
        <ActionButton $delete>
          <MdDeleteOutline />
        </ActionButton>
      </Td>
    </tr>
  );
}

export const userColumns = [
  { key: "id", title: "ID" },
  { key: "avatar", title: "Avatar" },
  { key: "fullName", title: "Full Name" },
  { key: "email", title: "Email" },
  { key: "phone", title: "Phone" },
  { key: "createdAt", title: "Created At" },
  { key: "status", title: "Verified" },
  { key: "action", title: "Action" },
];

export default BodyUser;
