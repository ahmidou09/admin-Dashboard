import React from "react";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import styled from "styled-components";

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

export const productColumns = [
  { key: "id", title: "ID" },
  { key: "imageUrl", title: "Image" },
  { key: "title", title: "Title" },
  { key: "color", title: "Color" },
  { key: "producer", title: "Producer" },
  { key: "inStock", title: "Stock" },
  { key: "price", title: "Price" },
  { key: "createdAt", title: "Created At" },
  { key: "action", title: "Action" },
];

const BodyProcucts = ({ product }) => {
  return (
    <tr key={product.id}>
      <Td> {product.id} </Td>
      <Td>
        <Link to={`/products/${product.id}`}>
          <Avatar>
            <img src={product.imageUrl} alt={product.title} />
          </Avatar>
        </Link>
      </Td>
      <Td>{product.title}</Td>
      <Td>{product.color}</Td>
      <Td>{product.producer}</Td>
      <Td>{product.inStock ? "Yes" : "No"}</Td>
      <Td>{product.price}</Td>
      <Td>{product.createdAt}</Td>
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
};

export default BodyProcucts;
