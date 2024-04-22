import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { userData } from "./userData";
import { dataChart_3 } from "../../components/chartBox/dataChartBox";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const UserSingelContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 2rem 4rem;
`;

const UserSinge = styled.div`
  display: flex;
  gap: 8rem;
  padding: 2rem;
  width: 100%;

  .view {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex: 3;

    .info {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      &__top {
        display: flex;
        align-items: center;
        gap: 2rem;

        img {
          width: 10rem;
          height: 10rem;
          object-fit: cover;
        }

        h1 {
          font-size: 1.9rem;
          font-weight: 500;
        }

        button {
          background-color: var(--color-grey-1);
          padding: 0.2rem 1rem;
          border: 1px solid var(--color-white-2);
          border-radius: 0.5rem;
          font-size: 1.2rem;
        }
      }

      .details {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;

        &__item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        &__title {
          color: var(--color-white-2);
          font-size: 1.7rem;
          font-weight: 500;
          text-transform: capitalize;
        }

        &__value {
          color: var(--color-white-2);
          font-size: 1.6rem;
        }
      }
    }

    .chart {
      width: 100%;
      height: 40rem;
      padding: 2rem 0;
    }
  }

  .activities {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    flex: 2;

    .list {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      position: relative;
      padding: 4rem 0 0 0;

      &::before {
        content: "";
        width: 2px;
        height: 100%;
        background-color: var(--color-button-red-2);
        margin-bottom: 2rem;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
      }

      li {
        padding: 1rem;
        position: relative;
        background-color: var(--color-red-2);
        transition: all 0.2s ease-in-out;
        cursor: pointer;

        &:hover {
          background-color: var(--color-red-1);
        }

        &::before {
          content: "";
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background-color: var(--color-red-1);
          display: inline-block;
          margin-bottom: 0.5rem;
          position: absolute;
          left: -5px;
          top: 0;
          transform: translateY(-50%);
        }
      }

      &__itemInfo {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        p {
          font-size: 1.6rem;
        }

        time {
          font-size: 1.1rem;
        }
      }
    }
  }
`;

function UserSingel() {
  const { id } = useParams();
  const user = userData.find((user) => user.id === +id);

  return (
    <UserSingelContainer>
      <UserSinge>
        <div className="view">
          <div className="info">
            <div className="info__top">
              <img src={user.image} alt="profile" />
              <h1> {user.fullName}</h1>
              <button>Edit</button>
            </div>
            <div className="details">
              <div className="details__item">
                <span className="details__title">username:</span>
                <span className="details__value">{user.username}</span>
              </div>
              <div className="details__item">
                <span className="details__title">fullname:</span>
                <span className="details__value">{user.fullName}</span>
              </div>
              <div className="details__item">
                <span className="details__title">email:</span>
                <span className="details__value">{user.email}</span>
              </div>
              <div className="details__item">
                <span className="details__title">phone:</span>
                <span className="details__value">{user.phone}</span>
              </div>
              <div className="details__item">
                <span className="details__title">status:</span>
                <span className="details__value">{user.status}</span>
              </div>
            </div>
          </div>
          <div className="chart">
            <ResponsiveContainer>
              <LineChart data={dataChart_3}>
                <XAxis />
                <YAxis />
                <Legend />
                <Tooltip
                  position={{ x: 80, y: -20 }}
                  labelStyle={{ display: "none" }}
                  contentStyle={{
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="var(--color-teal-1)"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="uv"
                  stroke="var(--color-purple-2)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="activities">
          <h2>Latest Activities</h2>
          <ul className="list">
            {user.activities.map((activity, index) => (
              <li key={index}>
                <div className="list__itemInfo">
                  <p>
                    {user.fullName} {activity.activitie}
                  </p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </UserSinge>
    </UserSingelContainer>
  );
}

export default UserSingel;
