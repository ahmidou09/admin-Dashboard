import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

const LineChartBoxContainer = styled.div`
  display: flex;
  padding: 0.5rem;

  .boxInfo {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    .title {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }

  .chartInfo {
    width: 100%;
    flex: 1;

    .chart {
      width: 100%;
      height: 8em;
    }

    .texts {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.2rem;

      .percentage {
        font-size: 1.6rem;
        font-weight: 600;
      }

      .duration {
        font-size: 1.2rem;
        color: var(--color-grey-0);
      }
    }
  }
`;

function LineChartBox({
  percentage,
  value,
  title,
  icon,
  color,
  dataChart,
  link,
}) {
  return (
    <LineChartBoxContainer>
      <div className="boxInfo">
        <div className="title">
          {icon}
          <span>{title}</span>
        </div>
        <h1>{value}</h1>
        <Link to={link} style={{ color }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer>
            <LineChart data={dataChart}>
              <Tooltip
                contentStyle={{
                  backgroundColor: "transparent",
                  color: "var(--color-white)",
                  border: "none",
                }}
                position={{ x: 80, y: -20 }}
                labelStyle={{ display: "none" }}
              />
              <Line
                type="monotone"
                dot={false}
                dataKey="pv"
                strokeWidth={2}
                stroke={color}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{
              color:
                percentage > 0
                  ? "var(--color-green-1)"
                  : "var(--color-button-red-1)",
            }}
          >
            {percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </LineChartBoxContainer>
  );
}

export default LineChartBox;
