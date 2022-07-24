import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";

function AppLayout() {
  return (
    <StyledLayout className="d-flex flex-column">
      <Header />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </StyledLayout>
  );
}
const StyledLayout = styled.div`
  min-height: 100vh;
`;

export default AppLayout;
