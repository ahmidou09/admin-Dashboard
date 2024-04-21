import React from "react";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";
import styled from "styled-components";

const TinyBarChartBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    padding: 0 1rem;
  }
`;

function TinyBarChartBox({ title, color, data }) {
  return (
    <TinyBarChartBoxContainer>
      <h2>{title}</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" fill={color} />
          <Tooltip
            contentStyle={{
              backgroundColor: "transparent",
              color: "black",
              border: "none",
            }}
            position={{ x: 220, y: -50 }}
            labelStyle={{
              display: "none",
            }}
            cursor={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </TinyBarChartBoxContainer>
  );
}

export default TinyBarChartBox;
