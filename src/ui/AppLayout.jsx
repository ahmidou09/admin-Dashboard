import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/navbar/NavBar";
import Menu from "../components/navbar/Menu";
import Footer from "../components/navbar/Footer";

const StyledAppLayout = styled.div`
  background-color: var(--color-primary-3);
  color: var(--color-white);
`;

const MainContainer = styled.main`
  display: flex;
  gap: 2rem;
  padding: 2rem;
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
