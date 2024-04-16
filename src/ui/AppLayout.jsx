import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/navbar/NavBar";
import Loader from "./Loader";

const StyledAppLayout = styled.div`
  width: 100%;
  background-color: var(--color-primary-3);
`;

function AppLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1 * 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledAppLayout>
      <NavBar />
      <main>{loading ? <Loader /> : <Outlet />}</main>
    </StyledAppLayout>
  );
}

export default AppLayout;
