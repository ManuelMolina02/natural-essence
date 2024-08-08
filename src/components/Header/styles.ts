import styled from "styled-components";
import { Modal } from "antd";

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme["gray-900"]};
  color: ${({ theme }) => theme["gray-100"]};
  padding: 2.5rem 0 7.5rem;
  text-align: center;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewTransactionButton = styled.button`
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

export const AddTransactionModal = styled(Modal)`
  .ant-modal-content {
    background-color: ${({ theme }) => theme["gray-800"]};
    color: ${({ theme }) => theme["gray-100"]};

    .ant-modal-close {
      color: ${({ theme }) => theme["gray-400"]};

      &:hover {
        background-color: ${({ theme }) => theme["gray-700"]};
      }
    }
  }
`;
