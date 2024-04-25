import React from "react";
import styled from "styled-components";
import { electronicData } from "./productsData";
import TableItems from "../../components/Table/Table";
import BodyProduct from "./BodyProcucts";
import { productColumns } from "./BodyProcucts";

const ProductsContainer = styled.div`
  height: 100vh;
  width: 100%;
  max-height: calc(100vh - 16rem);
  padding: 2rem 4rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 1rem;
    background-color: var(--color-primary-3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-primary-2);
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--color-primary-1);
  }

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

function Products() {
  return (
    <ProductsContainer>
      <div className="title">
        <h1>Products</h1>
        <button>Add Product</button>
      </div>
      <TableItems
        data={electronicData}
        columns={productColumns}
        renderItem={(product) => <BodyProduct product={product} />}
        itemLink="users"
        itemPerPage="8"
      />
    </ProductsContainer>
  );
}

export default Products;
