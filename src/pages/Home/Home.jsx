import React from "react";
import styled from "styled-components";
import { dataArray } from "../Users/FakeDataList";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  width: 100%;
  .layoutContainer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, minmax(180px, 250px));
    gap: 2rem;
    padding: 2rem;

    .box {
      background-color: var(--color-primary-2);
      color: var(--color-white);
      border: 1px solid var(--color-lines);
      padding: 1rem;
      border-radius: 1rem;
    }

    .box_1 {
      grid-column: 1 / span 1;
      grid-row: 1 / span 3;
      overflow-y: scroll;
    }

    .box_1::-webkit-scrollbar {
      width: 1.25rem;
    }

    .box_1::-webkit-scrollbar-track {
      background-color: var(--color-lines);
      border-radius: 1rem;
    }

    .box_1::-webkit-scrollbar-thumb {
      background-color: var(--color-primary-2);
      border-radius: 10px;
      border: 3px solid var(--color-lines);
    }

    .box_1::-webkit-scrollbar-thumb:hover {
      background-color: var(--color-primary-3);
    }

    .box_2 {
      grid-column: 2 / span 1;
    }

    .box_4 {
      grid-column: 4 / span 1;
      grid-row: 1 / span 3;
    }

    .box_7 {
      grid-column: 2 / span 2;
      grid-row: 3 / span 2;
    }

    .user_container {
      padding: 2rem 1rem;

      .user {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding-bottom: 1rem;

        &:not(:last-child) {
          margin-bottom: 1rem;
          border-bottom: 1px solid var(--color-lines);
        }

        .user_image {
          width: 6rem;
          img {
            border: 2px solid var(--color-grey-1);
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
            line-height: 1.4;
            font-weight: 200;
          }
        }
      }
    }
  }
`;

function Home() {
  return (
    <HomeContainer>
      <div className="layoutContainer">
        <div className="box box_1">
          <h1>Users</h1>
          <div className="user_container">
            {dataArray.map((user) => (
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
        </div>
        <div className="box box_2">box 2</div>
        <div className="box box_3">box 3</div>
        <div className="box box_4">box 4</div>
        <div className="box box_5">box 5</div>
        <div className="box box_6">box 6</div>
        <div className="box box_7">box 7</div>
        <div className="box box_8">box 8</div>
        <div className="box box_9">box 9</div>
      </div>
    </HomeContainer>
  );
}

export default Home;
