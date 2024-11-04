import styled from "styled-components";

export const BoxList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const Option = styled.div<{ active: boolean }>`
  display: flex;
  height: 80px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  ${({ theme, active }) =>
    active
      ? `
          background-color: ${theme["teal-700"]};
              color: ${theme["gray-50"]};

          &:hover {
              background-color: ${theme["teal-800"]};
          }
        `
      : `
          background-color: ${theme["gray-700"]};
          color: ${theme["gray-400"]};
          
          &:hover {
              background-color: ${theme["gray-600"]};
              color: ${theme["gray-100"]};
          }
        `}
`;
