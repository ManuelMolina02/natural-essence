import styled, { keyframes } from "styled-components";

const animationSpin = keyframes`
  
  0% {
    transform: rotate(0deg);
    }
    100% {
    transform: rotate(360deg);
    }`;

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 520px;

  svg {
    animation: ${animationSpin} 1s linear infinite;
  }
`;
