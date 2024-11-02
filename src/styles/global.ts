import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  box-sizing: border-box;  
  max-width: 700px;
  margin: 0 auto;
}

  input:focus {
    outline: none;
    box-shadow:  0 0 0 2px ${({ theme }) => theme["green-500"]};
  }

  body {
    background-color: ${({ theme }) => theme["gray-800"]};
    color: ${({ theme }) => theme["gray-100"]};
    padding: 2rem;
    --webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
      font: 400 1rem 'Roboto', sans-serif;
  }

   ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme["gray-700"]};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: #1c1c1c
  }

   
`;
