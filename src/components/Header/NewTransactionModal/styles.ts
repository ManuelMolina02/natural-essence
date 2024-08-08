import styled from "styled-components";

export const NewTransactionModalContainer = styled.div`
  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    label {
      color: ${({ theme }) => theme["gray-300"]} !important;
    }

    input {
      background-color: ${({ theme }) => theme["gray-700"]};
      border: 1px solid ${({ theme }) => theme["gray-700"]};
      color: ${({ theme }) => theme["gray-100"]};

      &::placeholder {
        color: ${({ theme }) => theme["gray-400"]};
      }

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme["gray-700"]};
        border: 1px solid ${({ theme }) => theme["gray-800"]};
      }
    }
  }
`;

export const AddTransactionButton = styled.button`
  width: 100%;
  height: 50px;
  border: 0;
  background-color: ${({ theme }) => theme["green-500"]};
  color: ${({ theme }) => theme["white"]};
  font-weight: bold;
  border-radius: 6px;
  padding: 0 1.25rem;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const TransactionType = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
  isActive?: boolean;
}

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  height: 50px;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: bold;
  border-radius: 6px;
  padding: 0 1.25rem;
  cursor: pointer;
  transition: filter 0.2s, background-color 0.2s;

  ${({ variant, isActive, theme }) => {
    if (isActive) {
      return `
      background-color: ${theme["gray-600"]};
        color: ${theme["gray-300"]};

        svg {
          color: ${theme[variant === "income" ? "green-300" : "red-300"]};
        }

      `;
    } else {
      return `
        background-color: ${theme["gray-700"]};
        color: ${theme["gray-500"]};

         svg {
          color: ${theme["gray-500"]};
        }

         &:hover {
          filter: brightness(0.9);
        }
      `;
    }
  }}

  &:hover {
    filter: brightness(0.9);
  }
`;
