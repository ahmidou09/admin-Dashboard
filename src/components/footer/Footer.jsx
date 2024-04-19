import React from "react";
import styled from "styled-components";

const FooterContiner = styled.div`
  display: flex;
  height: 4rem;
  background-color: var(--color-primary-2);
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  font-size: 1.4rem;
`;

function Footer() {
  return (
    <FooterContiner>
      <span>AHMIDOU EL MEHDI</span>
      <span>Copyright © 2022. All rights reserved.</span>
    </FooterContiner>
  );
}

export default Footer;
