import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import logoImg from "../../assets/logo.svg";

interface HeaderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleTransactionModal: (data: any) => void;
}

export function Header({ handleTransactionModal }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={logoImg} alt="box.money" />
        </div>

        <NewTransactionButton
          type="button"
          onClick={() => handleTransactionModal({})}
        >
          Nova transação
        </NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
