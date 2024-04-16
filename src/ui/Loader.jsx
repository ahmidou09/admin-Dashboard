import React from "react";
import styled, { keyframes } from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const Spinner = styled.div`
  margin: 4.8rem auto;

  width: 6.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #4d5bce 94%, #0000) top/10px 10px
      no-repeat,
    conic-gradient(#0000 30%, #4d5bce);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${rotate} 1.5s infinite linear;
`;

function Loader() {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  );
}

export default Loader;
