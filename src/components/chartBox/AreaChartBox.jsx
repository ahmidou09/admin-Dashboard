import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const AreaChartBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  h2 {
    margin-bottom: 1.6rem;
    padding: 0 1.6rem;
  }
`;

function AreaChartBox() {
  return (
    <AreaChartBoxContainer>
      <h2>Revenue Analytics</h2>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "transparent",
              border: "none",
            }}
            position={{ x: 580, y: -70 }}
          />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="var(--color-teal-1)"
            fill="var(--color-teal-1)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="var(--color-accent-4)"
            fill="var(--color-accent-4)"
          />
          <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="var(--color-purple-2)"
            fill="var(--color-purple-2)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </AreaChartBoxContainer>
  );
}

export default AreaChartBox;
