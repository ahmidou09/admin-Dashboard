import React from "react";
import styled from "styled-components";
import UsersBox from "../../components/UsersBox/UsersBox";
import LineChartBox from "../../components/chartBox/LineChartBox";
import AreaChartBox from "../../components/chartBox/AreaChartBox";
import { FaUsers, FaShoppingCart, FaChartBar } from "react-icons/fa";
import { IoAppsSharp } from "react-icons/io5";
import {
  dataChart_1,
  dataChart_2,
  dataChart_3,
  dataChart_4,
  dataChart_5,
  dataChart_6,
} from "../../components/chartBox/dataChartBox";
import TinyBarChartBox from "../../components/chartBox/TinyBarChartBox";
import ShapePieChartBox from "../../components/chartBox/ShapePieChartBox";

const HomeContainer = styled.div`
  width: 100%;
  background-color: var(--color-primary-3);

  .layoutContainer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, minmax(16rem, auto));
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
      position: relative;
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
      grid-row: 3 / span 3;
    }

    .box_8 {
      grid-row: 4 / span 2;
    }

    .box_9 {
      grid-row: 4 / span 2;
    }
  }
`;

function Home() {
  return (
    <HomeContainer>
      <div className="layoutContainer">
        <div className="box box_1">
          <UsersBox />
        </div>
        <div className="box box_2">
          <LineChartBox
            dataChart={dataChart_1}
            color="var(--color-teal-1)"
            percentage={70}
            value={"30.238"}
            title="Total Users"
            icon={<FaUsers />}
          />
        </div>
        <div className="box box_3">
          <LineChartBox
            dataChart={dataChart_2}
            color="var(--color-purple-2)"
            value={"11.238"}
            percentage={-40}
            title="Total Products"
            icon={<FaShoppingCart />}
          />
        </div>
        <div className="box box_4">
          <ShapePieChartBox />
        </div>
        <div className="box box_5">
          <LineChartBox
            dataChart={dataChart_3}
            color="var(--color-accent-4)"
            value={"87.238"}
            percentage={78}
            title="Total Orders"
            icon={<IoAppsSharp />}
          />
        </div>
        <div className="box box_6">
          <LineChartBox
            dataChart={dataChart_4}
            color="var(--color-accent-1)"
            value={"57.238"}
            percentage={28}
            title="Total Sales"
            icon={<FaChartBar />}
          />
        </div>
        <div className="box box_7">
          <AreaChartBox />
        </div>
        <div className="box box_8">
          <TinyBarChartBox
            color={"var(--color-accent-1)"}
            data={dataChart_5}
            title={"Total Orders"}
          />
        </div>
        <div className="box box_9">
          <TinyBarChartBox
            color={"var(--color-accent-4)"}
            data={dataChart_6}
            title={"Profit Earned"}
          />
        </div>
      </div>
    </HomeContainer>
  );
}

export default Home;
