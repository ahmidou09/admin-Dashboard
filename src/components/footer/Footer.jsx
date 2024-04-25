import React from "react";
import styled from "styled-components";
import useIsMobile from "../../hooks/useIsMobile";

const FooterContiner = styled.div`
  display: flex;
  height: 4rem;
  background-color: var(--color-primary-2);
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  font-size: 1.4rem;
  height: 8rem;
  border-top: 1px solid var(--color-lines);
`;

function Footer() {
  const isMobile = useIsMobile();
  return (
    <FooterContiner>
      {!isMobile ? (
        <>
          <span>AHMIDOU EL MEHDI</span>
          <span>Copyright © 2024. All rights reserved.</span>
        </>
      ) : (
        <>
          <span>Ahmidou</span>
          <span>Copyright © 2024.</span>
        </>
      )}
    </FooterContiner>
  );
}

export default Footer;
