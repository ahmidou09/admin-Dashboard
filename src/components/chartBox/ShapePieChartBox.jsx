import React from "react";
import styled from "styled-components";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const ShapePieChartBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2rem;

  .legend {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;

    &_item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

function ShapePieChartBox() {
  return (
    <ShapePieChartBoxContainer>
      <h2>Leads by Source</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={300}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="var(--color-purple-2)"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div className="legend">
        {data01.map((entry, index) => (
          <div className="legend_item" key={`item-${index}`}>
            <div className="legend_item_info">
              <div className="legend_item_label">{entry.name}</div>
              <div className="legend_item_value">{entry.value}</div>
            </div>
          </div>
        ))}
      </div>
    </ShapePieChartBoxContainer>
  );
}

export default ShapePieChartBox;
