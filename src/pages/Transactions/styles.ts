import { Button as ButtonAntd, Modal, Steps } from "antd";
import styled from "styled-components";

export const StepsContainer = styled(Steps)`
  .ant-steps-item-title {
    color: ${({ theme }) => theme["gray-100"]} !important;
  }

  .ant-steps-item-icon {
    width: 34px;
    height: 34px;

    background-color: ${({ theme }) => theme["gray-600"]} !important;
    .ant-steps-icon {
      color: ${({ theme }) => theme["gray-300"]} !important;
    }
  }

  .ant-steps-item-title::after {
    background-color: ${({ theme }) => theme["gray-600"]} !important;
  }

  .ant-steps-item-finish {
    .ant-steps-item-icon {
      border-color: ${({ theme }) => theme["teal-700"]} !important;
      border-width: 2px !important;
    }
    .ant-steps-item-title::after {
      background-color: ${({ theme }) => theme["teal-700"]} !important;
    }
    .ant-steps-icon {
      color: ${({ theme }) => theme["green-300"]} !important;
    }
  }

  .ant-steps-item-active .ant-steps-item-icon {
    background-color: ${({ theme }) => theme["gray-600"]} !important;
    border-color: ${({ theme }) => theme["teal-700"]} !important;
    border-width: 2px !important;

    .ant-steps-icon {
      color: ${({ theme }) => theme["gray-100"]} !important;
    }
  }
`;

export const Button = styled(ButtonAntd)`
  width: 100%;
  height: 48px;

  background-color: ${({ theme }) => theme["gray-600"]};
  border: none;
  box-shadow: none;
  transition: background-color 0.2s, filter 0.2s;

  &:hover {
    background-color: #3e3e45 !important;
    filter: brightness(1.2) !important;
  }

  &:disabled {
    background-color: ${({ theme }) => theme["gray-700"]} !important;
    color: ${({ theme }) => theme["gray-400"]} !important;
    filter: none !important;
  }
`;

export const ReturnButton = styled(ButtonAntd)`
  width: 100%;
  height: 48px;

  background-color: ${({ theme }) => theme["gray-800"]};
  color: ${({ theme }) => theme["gray-500"]};
  border: 1px solid ${({ theme }) => theme["gray-600"]};
  box-shadow: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme["gray-700"]} !important;
    border: none !important;
    color: ${({ theme }) => theme["gray-100"]} !important;
  }

  &:disabled {
    background-color: ${({ theme }) => theme["gray-700"]} !important;
    color: ${({ theme }) => theme["gray-400"]} !important;
    filter: none !important;
    border: none !important;
  }
`;

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 2px 1.5rem 60px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  div:first-child {
    h2 {
      color: ${({ theme }) => theme["gray-300"]};
    }
  }
`;

export const TableBox = styled.div`
  max-height: 500px;
  overflow-y: auto;
  border-radius: 6px;
  padding: 12px;
  background-color: ${(props) => props.theme["gray-900"]};
`;

export const TransactionsTable = styled.table`
  width: 100%;

  border-collapse: separate;
  border-spacing: 0 1rem;

  tbody > tr > td:first-child {
    width: 40%;
  }

  td {
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

export const PriceHighlight = styled.span<{
  type: "income" | "outcome" | undefined;
}>`
  color: ${(props) =>
    props.type === "income"
      ? props.theme["green-300"]
      : props.theme["red-300"]};
`;

export const FloatButton = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme["gray-600"]};

  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const TransactionModal = styled(Modal)`
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

export const MonthButton = styled.div<{
  active?: boolean;
}>`
  padding: 8px 16px;
  border-radius: 6px;
  background-color: ${({ theme, active }) => {
    return active ? theme["gray-300"] : theme["gray-700"];
  }};
  color: ${({ theme, active }) =>
    active ? theme["gray-900"] : theme["gray-300"]};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, font-weight 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme["gray-600"]};
  }
`;

export const Image = styled.img`
  width: 360px;
  height: 42s0px;

  object-fit: cover;
  border-radius: 8px;
  filter: grayscale(1) brightness(0.8) blur(1px);

  margin: 0 auto;

  transition: filter 0.3s;
`;

export const BoxImage = styled.div<{
  activeItem?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;

  &:hover {
    ${Image} {
      filter: none;
    }

    > div {
      transform: translateY(-40px);
      transition: transform 0.3s;
      background-color: rgba(0, 0, 0, 0.9);

      span {
        bottom: 0;
        transition: bottom 0.3s;
      }
    }
  }

  ${({ activeItem }) =>
    activeItem &&
    `
    ${Image} {
      filter: none;
    }
  `}

  border-radius: 8px;
  overflow: hidden;

  > div {
    position: absolute;
    left: -1px;
    right: -1px;
    bottom: -160px;
    background-color: rgba(0, 0, 0, 0.8);

    height: 300px;
    padding: 0 8px;
    padding-top: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    visibility: visible;
    transform: translateY(0);
    transition: transform 0.3s;

    h2 {
      color: ${({ theme }) => theme["gray-100"]};
      margin-bottom: 14px;
    }

    span {
      color: ${({ theme }) => theme["gray-300"]};
      padding: 0 16px;
      position: relative;
      bottom: -300px;
    }
  }
`;

export const Table = styled.table`
  width: 100%;

  border-collapse: separate;
  border-spacing: 0 1rem;

  th {
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme["gray-600"]};

    text-align: left;

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  td {
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

export const BoxLink = styled.div`
  position: fixed;
  top: 20px;
  right: 40px;

  display: flex;
  gap: 16px;
`;

export const Link = styled.a`
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 8px;

  height: 48px;

  background-color: ${({ theme }) => theme["gray-600"]};
  color: ${({ theme }) => theme["gray-300"]};

  border-radius: 6px;
  transition: background-color 0.2s, filter 0.2s;

  &:hover {
    background-color: #3e3e45 !important;
    filter: brightness(1.2) !important;
  }

  box-shadow: none;
  border: none;
`;
