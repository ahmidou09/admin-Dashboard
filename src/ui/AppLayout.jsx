import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/navbar/NavBar";
import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";

const StyledAppLayout = styled.div`
  background-color: var(--color-primary-2);
  color: var(--color-white);
`;

const MainContainer = styled.main`
  display: flex;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <NavBar />
      <MainContainer>
        <Menu /> <Outlet />
      </MainContainer>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
