import React from "react";
import Footer from "../../components/footer/Footer";
import styled from "styled-components";
import UsersBox from "../../components/UsersBox/UsersBox";
import ChartBox from "../../components/chartBox/ChartBox";
import { FaUsers, FaShoppingCart, FaChartBar } from "react-icons/fa";
import { IoAppsSharp } from "react-icons/io5";
import {
  dataChart_1,
  dataChart_2,
  dataChart_3,
  dataChart_4,
} from "../../components/chartBox/dataChartBox";

const HomeContainer = styled.div`
  width: 100%;

  .layoutContainer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, minmax(180px, 200px));
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
      grid-row: 3 / span 2;
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
          <ChartBox
            dataChart={dataChart_1}
            color="var(--color-teal-1)"
            percentage={70}
            value={"30.238"}
            title="Total Users"
            icon={<FaUsers />}
          />
        </div>
        <div className="box box_3">
          <ChartBox
            dataChart={dataChart_2}
            color="var(--color-purple-2)"
            value={"11.238"}
            percentage={-40}
            title="Total Products"
            icon={<FaShoppingCart />}
          />
        </div>
        <div className="box box_4">box 4</div>
        <div className="box box_5">
          <ChartBox
            dataChart={dataChart_3}
            color="var(--color-accent-4)"
            value={"87.238"}
            percentage={78}
            title="Total Orders"
            icon={<IoAppsSharp />}
          />
        </div>
        <div className="box box_6">
          <ChartBox
            dataChart={dataChart_4}
            color="var(--color-button-p-3)"
            value={"57.238"}
            percentage={28}
            title="Total Sales"
            icon={<FaChartBar />}
          />
        </div>
        <div className="box box_7">box 7</div>
        <div className="box box_8">box 8</div>
        <div className="box box_9">box 9</div>
      </div>
      <Footer />
    </HomeContainer>
  );
}

export default Home;
